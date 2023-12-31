import { useEffect, useRef, useState } from "react";
import { COLOR } from "../../consts/Color";
import { FRAME } from "../../consts/Frame";
import { AnimationUtil } from "../../utils/Animation";
import style from "./Balloon.module.css";

interface Props {
  color: COLOR;
  onPopped: () => void;
}

export const Balloon = (props: Props) => {
  const { color, onPopped } = props;

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [frameIndex, setFrameIndex] = useState(1);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalId = useRef<number>(0);
  const isPopping = useRef(false);

  useEffect(() => {
    preloadImages();
    renderCanvas();
  }, []);

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

  const handleMouseDownBallon = () => {
    if (isPopping.current) return;

    console.log("mouseDown");
    intervalId.current = window.setInterval(() => {
      setFrameIndex((prev) => prev + 1);
    }, 16);
    isPopping.current = true;
  };

  return (
    <canvas
      ref={canvasRef}
      className={style.balloon}
      onMouseDown={handleMouseDownBallon}
    />
  );
};
