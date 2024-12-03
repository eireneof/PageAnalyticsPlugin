import express from 'express';
import cors from 'cors';
import { ConfigService } from './config/server-config.js';
import { StaticFileService } from './services/static-file.service.js';
class Server {
    app;
    config;
    fileService;
    constructor() {
        this.app = express();
        this.app.use(cors());
        const configService = new ConfigService();
        this.config = configService.getConfig();
        this.fileService = new StaticFileService(this.config);
    }
    setupMiddleware() {
        this.fileService.servePublicFiles(this.app);
        this.fileService.serveDataExtractorFiles(this.app);
    }
    start() {
        this.setupMiddleware();
        this.app.use('/dist', express.static('/dist'));
        this.app.listen(this.config.port, () => {
            console.log(`Server running at http://localhost:${this.config.port}`);
        });
    }
}
const server = new Server();
server.start();
