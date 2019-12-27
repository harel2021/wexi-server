import express from 'express';
import * as bodyparser from 'body-parser';
import { PORT } from './config/constants';
import { errorHandler } from './error/ErrorHandler';


const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Error handler 
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});