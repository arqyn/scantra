import express from "express";
import dotenv from "dotenv";
import scannerRoutes from "../src/routes/scanner.routes";
import { getFoodRecalls } from "./services/foodRecallService";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/scanner", scannerRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.json({ status: "recall scanner backend is running" });
});

// Food recall API route
app.get("/api/food-recalls", async (req, res) => {
  const limit = Number(req.query.limit) || 10;

  try {
    const recalls = await getFoodRecalls(limit);
    res.json(recalls);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch food recalls" });
  }
});

// Start the server after routes are defined
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
