import * as jobService from '../services/jobServices.js';

export const getJobs = async (req, res) => {
    try {
        const jobs = await jobService.getJobs();
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createJobApplication = async (req, res) => {
    try {
        const jobData = req.body;
        const newJob = await jobService.createJobApplication(jobData);
        res.status(201).json(newJob);
    } catch (error) {
        console.error('Error creating job:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateJobApplication = async (req, res) => {
    try {
        const JobId = req.params.id;
        const jobData = req.body;
        const updatedJob = await jobService.updateJobApplication(jobData, JobId);
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job Application not found' });
        }
        res.status(200).json(updatedJob);
    } catch (error) {
        console.error('Error updating job:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteJobApplication = async (req, res) => {
    try {
        const JobId = req.params.id;
        const deletedJob = await jobService.deleteJobApplication(JobId);
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job Application not found' });
        }
        res.status(200).json(deletedJob);
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const searchJobApplication = async (req, res) => {
    try {
        const searchTerm = req.query.q;
        const jobs = await jobService.searchJobApplication(searchTerm);
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error searching jobs:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}