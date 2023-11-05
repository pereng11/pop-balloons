import { COLOR } from "../consts/Color";

export class AnimationUtil {
  static getCurrentFrame(color: COLOR, frame: number) {
    return new URL(`/public/balloon/${color}/${frame}.png`, import.meta.url)
      .href;
  }
}
