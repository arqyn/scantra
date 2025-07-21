import cors, { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: "http://localhost:8081",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
