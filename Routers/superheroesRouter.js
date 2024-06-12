import express from "express";
import {
    createSuperhero,
    getAllSuperheroes,
    getSuperheroById,
    updateSuperhero,
    replaceSuperhero,
    deleteSuperhero
} from "../controllers/superheroesController.js";

const router = express.Router();

// Middleware
router.use(express.json());

router.post("/", createSuperhero);
router.get("/", getAllSuperheroes);
router.get("/:id", getSuperheroById);
router.patch("/:id", updateSuperhero);
router.put("/:id", replaceSuperhero);
router.delete("/:id", deleteSuperhero);

export default router;
