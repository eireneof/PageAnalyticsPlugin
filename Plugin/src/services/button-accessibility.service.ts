import { ButtonConfig } from "../interfaces/button.interface";

export default class ButtonAccessibilityService {
    configure(element: HTMLElement, config: ButtonConfig): void {
      element.setAttribute('aria-label', config.ariaLabel);
      element.setAttribute('role', 'button');
      element.setAttribute('title', config.title);
    }
  }