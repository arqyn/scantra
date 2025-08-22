import cors, { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  // TODO: Add deployed site URL to allowed origins once deployed
  origin: "http://localhost:8081",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
