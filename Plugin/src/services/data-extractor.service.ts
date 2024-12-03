import { ButtonConfig } from "../interfaces/button.interface";
import { ExtractedData } from "../interfaces/extracted-data.interface";
import ButtonStyleService  from "./button-style.service";
import DeviceDetectionService  from "./device-detection.service";
import  ThemeSwitchService  from "./theme-switch.service";


export class DataExtractor {
    private button!: HTMLButtonElement;
    private styleService: ButtonStyleService;
    private deviceService: DeviceDetectionService;
    private themeService!: ThemeSwitchService;
  
    constructor() {
      this.styleService = new ButtonStyleService();
      this.deviceService = new DeviceDetectionService();
      this.initializeButton();
        this.themeService = new ThemeSwitchService();
    }
  
    private initializeButton(): void {
      this.button = document.createElement('button');
      
      const config: ButtonConfig = {
        text: 'Extrair Dados',
        ariaLabel: 'Extrair dados da página',
        title: 'Clique para extrair dados da página atual'
      };
  
      this.button.textContent = config.text;
      this.styleService.applyStyles(this.button);
      this.styleService.setupHoverEffects(this.button);
      this.styleService.setupFocusEffects(this.button);
      
      this.button.onclick = this.handleButtonClick.bind(this);
      document.body.appendChild(this.button);
    }
  
    private handleButtonClick(): void {
      try {
        console.log(window.location)
        const data: ExtractedData = {
          device: this.deviceService.getDeviceType(),
          operatingSystem: this.deviceService.getOperatingSystem(),
          origin: window.location.host,
          themeSwitchCount: this.themeService.getCurrentCount()
        };
  
        this.themeService.resetCount();
        this.updateButtonState('success');
        this.saveData2(data);
      } catch (error) {
        console.error('Erro ao extrair dados:', error);
        this.updateButtonState('error');
      }
    }

    // TODO: tratar timezone
    // TODO: trocar portas estáticas por portas configuradas no .env
    // TODO: criar superToken para funcionarem independente de domínio
    // TODO: ajustar tratativa de token para permitir apenas 1 por domínio

    private async saveData2(data: ExtractedData): Promise<void> {
      const url = 'http://localhost:3001/api/collect';  // URL da API
  
      const token = '9f96006aff29c22de5c8240fa51e811c46d387aa1f3fa0bf410f8b03da148709'; // Token Bearer
  
      try {
          const response = await fetch(url, {
              method: 'POST', // Método POST para enviar os dados
              headers: {
                  'Content-Type': 'application/json', // Definindo o tipo de conteúdo como JSON
                  'Authorization': `${token}`, // Adicionando o cabeçalho de autorização
              },
              body: JSON.stringify(data) // Convertendo os dados para JSON
          });

          console.log("response")
          console.log(response)
  
          if (!response.ok) {
              throw new Error('Erro ao salvar os dados: ' + response.statusText);
          }
  
          const result = await response.json();
          console.log('Dados salvos com sucesso:', result);
      } catch (error) {
          console.error('Erro na requisição:', error);
          this.updateButtonState('error');
      }
  }
  
    private updateButtonState(state: 'success' | 'error'): void {
      this.button.disabled = true;
      this.button.style.cursor = 'not-allowed';
      this.button.style.opacity = '0.7';
  
      if (state === 'success') {
        this.button.style.backgroundColor = '#45a049';
        this.button.textContent = '✓ Dados Extraídos';
      } else {
        this.button.style.backgroundColor = '#ff4444';
        this.button.textContent = '❌ Erro';
      }
  
      setTimeout(() => {
        this.button.style.backgroundColor = '#4CAF50';
        this.button.textContent = 'Extrair Dados';
        this.button.disabled = false;
        this.button.style.cursor = 'pointer';
        this.button.style.opacity = '1';
      }, 3000);
    }
  
    private saveData(data: ExtractedData): void {
      console.log('Dados extraídos:', data);
      localStorage.setItem('extractedData', JSON.stringify(data));
      alert('Dados extraídos e salvos com sucesso!');
    }
  }
  
  export const dataExtractor = new DataExtractor();