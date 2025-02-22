import { Request, Response } from "express";
import Resource from "../models/resource.model";

// Create a resource
export const createResource = async (req: Request, res: Response) => {
    try {
        const resource = new Resource(req.body);
        await resource.save();
        res.status(201).json(resource);
    } catch (error) {
        const err = error as Error;
        res.status(400).json({ error: err.message });
    }
};

// Get all resources
export const getResources = async (req: Request, res: Response) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

// Get a single resource
export const getResourceById = async (req: Request, res: Response): Promise<void> => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
            res.status(404).json({ message: "Resource not found" });
            return;
        }
        res.json(resource);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

// Update a resource
export const updateResource = async (req: Request, res: Response): Promise<void> => {
    try {
        const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!resource) {
            res.status(404).json({ message: "Resource not found" });
            return;
        }
        res.json(resource);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

// Delete a resource
export const deleteResource = async (req: Request, res: Response): Promise<void> => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if (!resource) {
            res.status(404).json({ message: "Resource not found" });
            return;
        }
        res.json({ message: "Resource deleted successfully" });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

