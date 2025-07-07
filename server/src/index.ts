import express from "express";
import dotenv from "dotenv";
import scannerRoutes from "../src/routes/scanner.routes";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/scanner", scannerRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.json({ status: "recall scanner backend is running" });
});

// Start the server after routes are defined
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
