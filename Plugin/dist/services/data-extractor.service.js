import ButtonStyleService from "./button-style.service.js";
import DeviceDetectionService from "./device-detection.service.js";
import ThemeSwitchService from "./theme-switch.service.js";
export class DataExtractor {
    button;
    styleService;
    deviceService;
    themeService;
    constructor() {
        this.styleService = new ButtonStyleService();
        this.deviceService = new DeviceDetectionService();
        this.initializeButton();
        this.themeService = new ThemeSwitchService();
    }
    initializeButton() {
        this.button = document.createElement('button');
        const config = {
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
    handleButtonClick() {
        try {
            console.log(window.location);
            const data = {
                device: this.deviceService.getDeviceType(),
                operatingSystem: this.deviceService.getOperatingSystem(),
                origin: window.location.host,
                themeSwitchCount: this.themeService.getCurrentCount()
            };
            this.themeService.resetCount();
            this.updateButtonState('success');
            this.saveData2(data);
        }
        catch (error) {
            console.error('Erro ao extrair dados:', error);
            this.updateButtonState('error');
        }
    }
    // TODO: tratar timezone
    // TODO: trocar portas estáticas por portas configuradas no .env
    // TODO: criar superToken para funcionarem independente de domínio
    // TODO: ajustar tratativa de token para permitir apenas 1 por domínio
    async saveData2(data) {
        const url = 'http://localhost:3001/api/collect'; // URL da API
        const token = '9432c3271314caaa5f29f248cf4513fb0f341a2864981b3cda69052c526ded97'; // Token Bearer
        try {
            const response = await fetch(url, {
                method: 'POST', // Método POST para enviar os dados
                headers: {
                    'Content-Type': 'application/json', // Definindo o tipo de conteúdo como JSON
                    'Authorization': `${token}`, // Adicionando o cabeçalho de autorização
                },
                body: JSON.stringify(data) // Convertendo os dados para JSON
            });
            if (!response.ok) {
                throw new Error('Erro ao salvar os dados: ' + response.statusText);
            }
            const result = await response.json();
            console.log('Dados salvos com sucesso:', result);
        }
        catch (error) {
            console.error('Erro na requisição:', error);
            this.updateButtonState('error');
        }
    }
    updateButtonState(state) {
        this.button.disabled = true;
        this.button.style.cursor = 'not-allowed';
        this.button.style.opacity = '0.7';
        if (state === 'success') {
            this.button.style.backgroundColor = '#45a049';
            this.button.textContent = '✓ Dados Extraídos';
        }
        else {
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
    saveData(data) {
        console.log('Dados extraídos:', data);
        localStorage.setItem('extractedData', JSON.stringify(data));
        alert('Dados extraídos e salvos com sucesso!');
    }
}
export const dataExtractor = new DataExtractor();
