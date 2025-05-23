import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("recall scanner backend is running");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
