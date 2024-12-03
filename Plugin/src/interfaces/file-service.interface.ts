import express from "express";

export interface FileService {
  servePublicFiles(app: express.Application): void;
  serveDataExtractorFiles(app: express.Application): void;
}
