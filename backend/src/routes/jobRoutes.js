import express from 'express';

import * as jobController from '../controllers/jobController.js';

const router = express.Router();

router.get('/jobs', jobController.getJobs);
router.post('/jobs', jobController.createJobApplication);
router.put('/jobs/:id', jobController.updateJobApplication);
router.delete('/jobs/:id', jobController.deleteJobApplication);
router.get('/jobs/search', jobController.searchJobApplication);

export default router;