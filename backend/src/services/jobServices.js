import {query} from '../db.js';

export const getJobs = async() => {
    const {rows} = await query('SELECT * FROM job_applications ORDER BY id ASC');
    return rows;
}

export const createJobApplication = async(jobData) => {
    const {company, position, location, application_date, status, job_link} = jobData;

    const {rows} = await query(
        'INSERT INTO job_applications (company, position, location, application_date, status, job_link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [company, position, location, application_date, status, job_link]
    );
    return rows[0];
}

export const updateJobApplication = async(jobData, JobId) => {
    const {company, position, location, application_date, status, job_link} = jobData;

    const {rows} = await query(
        'UPDATE job_applications SET company = $1, position = $2, location = $3, application_date = $4, status = $5, job_link = $6 WHERE id = $7 RETURNING *',
        [company, position, location, application_date, status, job_link, JobId]
    );
    return rows[0];
}

export const deleteJobApplication = async(JobId) => {
    const {rows} = await query(
        'DELETE FROM job_applications WHERE id = $1 RETURNING *',
        [JobId]
    );
    return rows[0];
}

export const searchJobApplication = async(searchTerm) => {
    const {rows} = await query(
        'SELECT * FROM job_applications WHERE company ILIKE $1 OR position ILIKE $1 OR location ILIKE $1 ORDER BY id ASC',
        [`%${searchTerm}%`]
    );
    return rows;
}