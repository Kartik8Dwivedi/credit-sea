import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import ApiRoutes from './Routes/index.js';
import Config from './Config/serverConfig.js';
import connectToDB from './Config/databaseConnection.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
 
Config.RateLimiter(app);

connectToDB();

app.use('/api', ApiRoutes);

app.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

app.listen(Config.PORT, () => {
  console.log(`Server is running on http://localhost:${Config.PORT}/`);
});