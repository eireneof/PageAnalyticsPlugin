class ThemeSwitchService {
   // TODO: edidtar isso aqui que tá errado 
  countThemeSwitches(): number {
      const clickCount = parseInt(localStorage.getItem('buttonClicks') || '0');
      return clickCount;
    }
  
    resetCount(): void {
      localStorage.setItem('buttonClicks', '0');
      const countDisplay = document.getElementById('clickCount');
      if (countDisplay) {
        countDisplay.textContent = '0';
      }
      const clickButton = document.getElementById('clickButton');
      if (clickButton) {
        clickButton.setAttribute('aria-label', 'Click counter. Current count: 0');
      }
    }
  }

export default ThemeSwitchService;