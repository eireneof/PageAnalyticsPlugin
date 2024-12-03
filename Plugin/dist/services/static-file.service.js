import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export class StaticFileService {
    config;
    constructor(config) {
        this.config = config;
    }
    servePublicFiles(app) {
        try {
            const publicPath = path.resolve(__dirname, "../../dist/public");
            const distPath = path.resolve(__dirname, "../../dist");
            app.use(express.static(publicPath));
            app.use("/dist", express.static(distPath, {
                setHeaders: (res, filepath) => {
                    if (filepath.endsWith(".js")) {
                        res.setHeader("Content-Type", "application/javascript; charset=utf-8");
                    }
                },
            }));
            this.serveIndexPage(app);
        }
        catch (error) {
            console.error("Error serving static files:", error);
        }
    }
    serveIndexPage(app) {
        app.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, "../../dist/public/index.html"));
        });
    }
    serveDataExtractorFiles(app) {
        app.use("/services", express.static(path.join(__dirname, "../../dist/services"), {
            setHeaders: (res, filepath) => {
                if (filepath.endsWith(".js")) {
                    res.setHeader("Content-Type", "application/javascript");
                }
            },
        }));
    }
}
