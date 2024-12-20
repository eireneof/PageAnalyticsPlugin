import * as dotenv from 'dotenv';
import express from 'express';
import router from '../routes/apiRoutes';
import { db } from '../config/dbConfig';
import cors from 'cors';

dotenv.config();

const app = express();

const port = process.env.PORT ?? '3000';

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Accept',
    'Accept-Language',
    'Authorization',
    'Content-Type',
    'Origin',
    'Referer',
    'Sec-Fetch-Dest',
    'Sec-Fetch-Mode',
    'Sec-Fetch-Site',
    'User-Agent',
    'sec-ch-ua',
    'sec-ch-ua-mobile',
    'sec-ch-ua-platform',
  ],
  credentials: true,
  optionsSuccessStatus: 204,
  maxAge: 86400, // 24 hours
};

// Apply CORS before routes
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

db.then(() => {
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
});
