import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import resourceRoutes from "./routes/resource.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Routes
app.use("/api/resources", resourceRoutes); // ✅ Make sure this line exists

// Default route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
