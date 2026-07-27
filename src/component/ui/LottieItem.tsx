import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import type { AnimationItem } from 'lottie-web';

interface LottieItemProps {
  animationData: object;
  speed?: number;
  loop?: boolean;
  direction?: 1 | -1;
  label?: string;
}

export function LottieItem({
  animationData,
  speed = 1,
  loop = true,
  direction = 1,
  label,
}: LottieItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    if (animationRef.current) {
      animationRef.current.destroy();
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animation = lottie.loadAnimation({
      container: element,
      renderer: 'svg',
      autoplay: false,
      loop: reducedMotion ? false : loop,
      animationData,
    });

    animation.setSpeed(speed);
    animation.setDirection(direction);
    animationRef.current = animation;

    if (reducedMotion) {
      animation.goToAndStop(0, true);
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          entry.isIntersecting ? animation.play() : animation.pause();
        },
        { threshold: 0.5 },
      );
      observer.observe(element);

      return () => {
        observer.disconnect();
        animation.destroy();
        animationRef.current = null;
      };
    }

    return () => {
      animation.destroy();
      animationRef.current = null;
    };
  }, [animationData, speed, loop, direction]);

  return (
    <div
      ref={containerRef}
      className="h-75 w-75 cursor-pointer"
      role="img"
      aria-label={label ?? 'Lottie animation'}
    />
  );
}
