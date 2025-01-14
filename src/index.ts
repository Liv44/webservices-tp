import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { env } from "process";

dotenv.config();
const prisma = new PrismaClient();


(async () => {
    const port = process.env.PORT || 3000;

    const { default: app } = await import('./infrastructure/app');

    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
    app.get("/", (req: Request, res: Response) => {
        res.send("Express + TypeScript Server");
    });
})().catch((error) => {
    console.error(error);

    process.exitCode = 1;
});