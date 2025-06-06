import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import { getFoodRecalls } from "./services/foodRecallService";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use("/api/auth");

// app.use(
//   cors({
//     origin: ["http://localhost:8081", "exp://192.168.exp://192.168.1.20:8081"],
//     credentials: true,
//   })
// );

app.get("/", (_, res) => {
  res.json({ status: "recall scanner backend is running" });
});
const users: { username: string; password: string }[] = [];
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  users.push({ username, password: hash });

  console.log(users);

  res.send("ok 200");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) {
    res.send("Found no user with username" + username);
    return;
  }
  const isValid = await bcrypt.compareSync(password, user.password);
  if (!isValid) {
    res.send("wrong password");
    return;
  }
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
