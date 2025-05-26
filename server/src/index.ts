import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.json({ status: "recall scanner backend is running" });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
