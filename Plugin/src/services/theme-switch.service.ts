export default class ThemeSwitchService {
  private readonly STORAGE_KEY = "theme-switch-count";
  private button!: HTMLElement | null;

  constructor() {
    window.onload = () => {
      this.button = document.getElementById("theme-switch-button");
      this.setupClickListener();
    };
  }

  public setupClickListener(): void {
    if (this.button) {
      this.button.addEventListener("click", () => {
        const currentCount = this.getCount();
        this.setCount(currentCount + 1);
      });
    }
  }

  private getCount(): number {
    return parseInt(localStorage.getItem(this.STORAGE_KEY) ?? "0", 10);
  }

  private setCount(count: number): void {
    localStorage.setItem(this.STORAGE_KEY, count.toString());
  }

  public getCurrentCount(): number {
    return this.getCount();
  }

  public resetCount(): void {
    this.setCount(0);
  }
}
