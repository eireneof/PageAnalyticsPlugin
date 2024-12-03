import { ButtonConfig } from "../interfaces/button.interface";
import { ExtractedData } from "../interfaces/extracted-data.interface";
import ButtonStyleService from "./button-style.service";
import { CollectDataService } from "./collect-data.service";
import DeviceDetectionService from "./device-detection.service";
import ThemeSwitchService from "./theme-switch.service";

export class DataExtractorButton {
  private button!: HTMLButtonElement;
  private styleService: ButtonStyleService;
  private deviceService: DeviceDetectionService;
  private themeService!: ThemeSwitchService;
  private collectDataService: CollectDataService;

  constructor() {
    this.styleService = new ButtonStyleService();
    this.deviceService = new DeviceDetectionService();
    this.collectDataService = new CollectDataService();
    this.initializeButton();
    this.themeService = new ThemeSwitchService();
  }

  private initializeButton(): void {
    this.button = document.createElement("button");

    const config: ButtonConfig = {
      text: "Extrair Dados",
      ariaLabel: "Extrair dados da página",
      title: "Clique para extrair dados da página atual",
    };

    this.button.textContent = config.text;
    this.styleService.applyStyles(this.button);
    this.styleService.setupHoverEffects(this.button);
    this.styleService.setupFocusEffects(this.button);

    this.button.onclick = this.handleButtonClick.bind(this);
    document.body.appendChild(this.button);
  }

  private buildExtractedData(): ExtractedData {
    return {
      device: this.deviceService.getDeviceType(),
      operatingSystem: this.deviceService.getOperatingSystem(),
      origin: window.location.host,
      themeSwitchCount: this.themeService.getCurrentCount(),
    };
  }

  private async handleButtonClick() {
    try {
      const data = this.buildExtractedData();
      console.log(data);
      this.themeService.resetCount();
      const result = await this.collectDataService.saveData(data);
      if (result.ok) {
        const resultBody = await result.json();
        this.updateButtonState("success");
        alert(`Dados salvos com sucesso: ${resultBody.id}`);
        console.log(resultBody);
      } else {
        alert(`Erro ao salvar os dados`);
        this.updateButtonState("error");
      }
    } catch (error) {
      alert(`Erro ao salvar os dados`);
      console.error("Erro ao extrair dados:", error);
      this.updateButtonState("error");
    }
  }

  private updateButtonState(state: "success" | "error"): void {
    this.button.disabled = true;
    this.button.style.cursor = "not-allowed";
    this.button.style.opacity = "0.7";

    if (state === "success") {
      this.button.style.backgroundColor = "#45a049";
      this.button.textContent = "✓ Dados Extraídos";
    } else {
      this.button.style.backgroundColor = "#ff4444";
      this.button.textContent = "❌ Erro";
    }

    setTimeout(() => {
      this.button.style.backgroundColor = "#4CAF50";
      this.button.textContent = "Extrair Dados";
      this.button.disabled = false;
      this.button.style.cursor = "pointer";
      this.button.style.opacity = "1";
    }, 3000);
  }
}

export const dataExtractorButton = new DataExtractorButton();
