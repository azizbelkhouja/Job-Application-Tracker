CREATE TABLE job_applications (
    id SERIAL PRIMARY KEY,
    company VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    application_date VARCHAR(100) NOT NULL,
    status VARCHAR(50) CHECK (
        status IN (
            'Candidatura inviata',
            'Colloquio programmato',
            'Offerta ricevuta',
            'Rifiutato'
        )
    ) NOT NULL,
    job_link TEXT
);

INSERT INTO job_applications (company, position, location, application_date, status, job_link)
VALUES
('CINECA', 'Backend Developer', 'Ferrara', '2025-04-12', 'Candidatura inviata', 'https://cineca.jobs/backend-ferrara'),
('Comune di Ferrara', 'Software Engineer', 'Ferrara', '2025-04-06', 'Colloquio programmato', 'https://comune.fe.it/lavora-con-noi'),
('Unife (Università degli Studi di Ferrara)', 'Web Developer', 'Ferrara', '2025-04-09', 'Offerta ricevuta', 'https://unife.it/lavoro/web-dev'),
('SpalTech Srl', 'Junior Frontend Developer', 'Ferrara', '2025-04-04', 'Rifiutato', 'https://spaltech.it/jobs/frontend-junior');

UPDATE job_applications 
SET 
    company = 'Cedat 85', 
    position = 'Software Engineer', 
    location = 'Ferrara', 
    application_date = '2025-04-10', 
    status = 'Candidatura inviata', 
    job_link = 'https://cedat85.com/lavora-con-noi/software-engineer-ferrara' 
WHERE id = 1;

DELETE FROM job_applications WHERE id = 2;

SELECT * 
FROM job_applications 
WHERE company ILIKE '%Backend Developer%' 
   OR position ILIKE '%Backend Developer%' 
   OR location ILIKE '%Backend Developer%' 
ORDER BY id ASC;


