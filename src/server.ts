// Imports
import "dotenv/config";
import cors from "cors";
import express from "express";
import { notFound } from "./controllers/notFoundController";
import swaggerUi from "swagger-ui-express";
import { specs } from "./swagger";
import eventRoutes from "./routes/eventRoutes";
import mongoose from "mongoose";

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/events", eventRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.all("*", notFound);

// Database connection
try {
  if (!process.env.MONGO_URI) {
    throw new Error("Missing MONGO_URI environment variable in .env file");
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connection OK");
} catch (err) {
  console.error(err);
  process.exit(1);
}

// Server Listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}! 🚀`);
});
