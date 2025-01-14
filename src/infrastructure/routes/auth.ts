import User from "@domain/User";
import { Router } from "express";

const router = Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    res.send("Login");
});

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    res.send("Signup");
})

export default router;