export class DeviceSetting {
  static NO_KEY = "no_key";
  setArea(area: string) {
    localStorage.setItem(DeviceSetting.NO_KEY, `${area}`);
  }

  getArea(): string | null {
    return localStorage.getItem(DeviceSetting.NO_KEY);
  }
}
