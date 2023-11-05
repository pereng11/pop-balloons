import { COLOR } from "../consts/Color";
import { URLUtil } from "./URL";

export class AnimationUtil {
  static getCurrentFrame(color: COLOR, frame: number) {
    return URLUtil.getDynamicURL(`/public/balloon/${color}/${frame}.png`);
  }
}
