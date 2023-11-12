import { useEffect, useRef, useState, useMemo } from "react";
import { COLOR } from "../../consts/Color";
import { FRAME } from "../../consts/Frame";
import { AnimationUtil } from "../../utils/Animation";
import style from "./Balloon.module.css";
import popAudioSrc from "./../../assets/audio/balloon-pop.mp3";

interface Props {
  color: COLOR;
  onPopped: () => void;
  popImmediately?: boolean;
}

export const Balloon = (props: Props) => {
  const { color, onPopped, popImmediately = false } = props;

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [frameIndex, setFrameIndex] = useState(1);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalId = useRef<number>(0);
  const isPopping = useRef(false);

  const popAudio = useMemo(() => new Audio(popAudioSrc), []);

  useEffect(() => {
    preloadImages();
    renderCanvas();
  }, []);

  useEffect(() => {
    if (popImmediately) {
      popBalloon();
    }
  }, [popImmediately]);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1 || frameIndex > 6) {
      return;
    }

    const context = canvasRef.current.getContext("2d");
    let requestId: number;

    const render = () => {
      context?.clearRect(0, 0, 512, 512);
      context?.drawImage(images[frameIndex - 1], 0, 0);
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  useEffect(() => {
    if (frameIndex > 6) {
      window.clearInterval(intervalId.current);
      isPopping.current = false;
      onPopped();
    }
  }, [frameIndex, onPopped]);

  const preloadImages = () => {
    for (let frame = 1; frame <= FRAME.BALLOON; frame++) {
      const img = new Image();
      // const imgSrc = AnimationUtil.getCurrentFrame(color, frame);
      const imgSrc = AnimationUtil.getCurrentFrame(color, frame);
      img.src = imgSrc;
      setImages((prev) => [...prev, img]);
    }
  };

  const renderCanvas = () => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;

    context.canvas.width = 512;
    context.canvas.height = 512;
  };

  const popBalloon = () => {
    intervalId.current = window.setInterval(() => {
      setFrameIndex((prev) => prev + 1);
    }, 16);
    isPopping.current = true;
    popAudio.play();
  };

  const handleMouseDownBallon = () => {
    if (isPopping.current) return;

    popBalloon();
  };

  return (
    <canvas
      ref={canvasRef}
      className={style.balloon}
      onMouseDown={handleMouseDownBallon}
    />
  );
};
