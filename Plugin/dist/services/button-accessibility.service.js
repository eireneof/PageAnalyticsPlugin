export default class ButtonAccessibilityService {
    configure(element, config) {
        element.setAttribute('aria-label', config.ariaLabel);
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.setAttribute('title', config.title);
    }
}
