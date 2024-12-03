export default class ThemeSwitchService {
    STORAGE_KEY = "theme-switch-count";
    button;
    constructor() {
        // TODO: em guia anônima essa solução não funciona
        window.onload = () => {
            this.button = document.getElementById("theme-switch-button");
            this.setupClickListener();
        };
    }
    setupClickListener() {
        if (this.button) {
            this.button.addEventListener("click", () => {
                const currentCount = this.getCount();
                this.setCount(currentCount + 1);
            });
        }
    }
    getCount() {
        return parseInt(localStorage.getItem(this.STORAGE_KEY) ?? "0", 10);
    }
    setCount(count) {
        localStorage.setItem(this.STORAGE_KEY, count.toString());
    }
    getCurrentCount() {
        return this.getCount();
    }
    resetCount() {
        this.setCount(0);
    }
}
