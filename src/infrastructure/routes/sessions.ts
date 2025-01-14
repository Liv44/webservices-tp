import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("get all Sessions");
});

router.post("/", (req, res) => {
    res.send("create a Session, only for trainer");
});

router.get("/:id", (req, res) => {
    res.send("get a Session");
});

router.put("/:id", (req, res) => {
    res.send("update a Session, only for trainer");
});

router.delete("/:id", (req, res) => {
    res.send("delete a Session, only for trainer");
});

router.post("/:id/signature", (req, res) => {
    res.send("create a Signature for one session, only for students");
})

router.get("/:id/signature", (req, res) => {
    res.send("get all student signatures for one session, only for trainer");
});

export default router;