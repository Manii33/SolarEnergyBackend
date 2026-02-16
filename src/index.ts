import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Solar Energy Backend' });
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
