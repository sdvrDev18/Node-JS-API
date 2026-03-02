import express from 'express';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// A simple test route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Task Manager API is running' });
});

// Your task routes will go here later
// app.use('/api/v1/tasks', taskRoutes);

export default app;
