import { NumberUtil } from "../utils/Number";

export enum COLOR {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  BLUE = "blue",
  PINK = "pink",
  PURPLE = "purple",
}

export const getColorList = () => [...Object.values(COLOR)];

export const getRandomColor = () =>
  getColorList()[NumberUtil.generateRandomNumber(getColorList().length, 1)];
