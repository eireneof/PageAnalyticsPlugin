import express from "express";
import path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { FileService } from "../interfaces/file-service.interface";
import { ServerConfig } from "../interfaces/server-config.interface";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class StaticFileService implements FileService {
  constructor(private config: ServerConfig) {}

  servePublicFiles(app: express.Application): void {
    try {
      const publicPath = path.resolve(__dirname, "../../dist/public");
      const distPath = path.resolve(__dirname, "../../dist");

      app.use(express.static(publicPath));

      app.use(
        "/dist",
        express.static(distPath, {
          setHeaders: (res, filepath) => {
            if (filepath.endsWith(".js")) {
              res.setHeader(
                "Content-Type",
                "application/javascript; charset=utf-8"
              );
            }
          },
        })
      );

      this.serveIndexPage(app);
    } catch (error) {
      console.error("Error serving static files:", error);
    }
  }

  private serveIndexPage(app: express.Application): void {
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../../dist/public/index.html"));
    });
  }

  serveDataExtractorFiles(app: express.Application): void {
    app.use(
      "/services",
      express.static(path.join(__dirname, "../../dist/services"), {
        setHeaders: (res, filepath) => {
          if (filepath.endsWith(".js")) {
            res.setHeader("Content-Type", "application/javascript");
          }
        },
      })
    );
  }
}
