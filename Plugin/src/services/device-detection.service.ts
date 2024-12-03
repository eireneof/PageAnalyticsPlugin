export default class DeviceDetectionService {
  getDeviceType(): string {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) return "android";
    if (/iPad|iPhone|iPod/.test(userAgent)) return "ios";
    return "desktop";
  }

  getOperatingSystem(): string {
    const userAgent = navigator.userAgent;
    if (/Windows/.test(userAgent)) return "Windows";
    if (/Mac/.test(userAgent)) return "MacOS";
    if (/Linux/.test(userAgent)) return "Linux";
    return "Unknown";
  }
}
