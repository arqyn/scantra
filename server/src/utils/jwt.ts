import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

//It generates a token for each user
export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1d" });
};

//Veify token is valid
export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
