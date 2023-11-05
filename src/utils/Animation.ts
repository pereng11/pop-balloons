import { COLOR } from "../consts/Color";

export class AnimationUtil {
  static getCurrentFrame(color: COLOR, frame: number) {
    return `/public/balloon/${color}/${frame}.png`;
  }
}
