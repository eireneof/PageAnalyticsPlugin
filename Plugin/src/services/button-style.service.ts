import { ButtonStyle } from "../interfaces/button.interface";

export default class ButtonStyleService {
    applyStyles(button: HTMLButtonElement): void {
      Object.assign(button.style, {
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '9999',
        padding: '20px 40px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: '#ffffff',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        outline: 'none'
      });
    }
  
    setupHoverEffects(button: HTMLButtonElement): void {
      button.onmouseenter = () => {
        button.style.backgroundColor = '#45a049';
        button.style.transform = 'translateY(-50%) translateX(-5px)';
        button.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
      };
  
      button.onmouseleave = () => {
        button.style.backgroundColor = '#4CAF50';
        button.style.transform = 'translateY(-50%)';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      };
    }
  
    setupFocusEffects(button: HTMLButtonElement): void {
      button.addEventListener('focus', () => {
        button.style.boxShadow = '0 0 0 3px rgba(76, 175, 80, 0.5)';
      });
  
      button.addEventListener('blur', () => {
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      });
    }
  }