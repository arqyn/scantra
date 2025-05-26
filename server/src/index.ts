import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const { getFoodRecalls } = require('./services/foodRecallService');

app.get("/", (_, res) => {
  res.json({ status: "recall scanner backend is running" });
});

// Food recall API route
app.get('/api/food-recalls', async (req, res) => {
  const limit = Number(req.query.limit) || 10;

  try {
    const recalls = await getFoodRecalls(limit);
    res.json(recalls);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch food recalls' });
  }
});

// Start the server after routes are defined
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
