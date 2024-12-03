import path from "path";
import { fileURLToPath } from "url";
export class ConfigService {
    config;
    constructor() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        this.config = {
            port: process.env.PORT ?? '3000',
            publicDir: path.join(__dirname, '../../public'),
            servicesDir: path.join(__dirname, '../../services')
        };
    }
    getConfig() {
        return this.config;
    }
}
