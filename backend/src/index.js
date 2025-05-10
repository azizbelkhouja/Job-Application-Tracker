import express from 'express'
import cors from 'cors'
import jobRoute from './routes/jobRoutes.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', jobRoute);

app.listen(port, () => {
    console.log(`Server is running on port 3000`);
});

app.get('/', (req, res) => {
    res.send('Hello Backend!')
})