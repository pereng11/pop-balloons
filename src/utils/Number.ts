export class NumberUtil {
  static generateRandomNumber(source: number, magnificationRatio: number = 2) {
    const min = 1;
    const max = source * magnificationRatio;
    return Math.floor(Math.random() * (max - min) + min);
  }
}
