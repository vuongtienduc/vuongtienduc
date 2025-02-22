import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Resource = mongoose.model("Resource", resourceSchema);
export default Resource;
