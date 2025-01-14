import express from 'express';
import authRouter from './routes/auth';
import sessionsRouter from './routes/sessions';

const app = express();

app.use('/auth/', authRouter);
app.use('/sessions/', sessionsRouter);

export default app;