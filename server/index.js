import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Simple test route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
