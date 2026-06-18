import { useEffect, useRef, useState } from 'react';

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'pop-up'
  | 'pop-in'
  | 'zoom-in';

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  once?: boolean;
}

export function useScrollAnimation(
  animation: AnimationType = 'fade-up',
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.15, delay = 0, once = false } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          if (once) observer.disconnect();
        } else {
          if (!once && hasAnimated) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, hasAnimated]);

  const getStyle = (): React.CSSProperties => {
    const transitionDelay = `${delay}ms`;
    const base: React.CSSProperties = {
      transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)`,
      transitionDelay,
    };

    // Use a CSS clamp() so slide distances scale down on narrow viewports
    // instead of pushing content past the screen edge (which can cause a
    // horizontal scrollbar on mobile while the element is mid-transition).
    const slideDistance = 'clamp(16px, 8vw, 60px)';

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...base, opacity: 0, transform: 'translateY(40px)' };
        case 'fade-down':
          return { ...base, opacity: 0, transform: 'translateY(-40px)' };
        case 'fade-in':
          return { ...base, opacity: 0 };
        case 'slide-left':
          return { ...base, opacity: 0, transform: `translateX(calc(-1 * ${slideDistance}))` };
        case 'slide-right':
          return { ...base, opacity: 0, transform: `translateX(${slideDistance})` };
        case 'pop-up':
          return { ...base, opacity: 0, transform: 'scale(0.85) translateY(20px)' };
        case 'pop-in':
          return { ...base, opacity: 0, transform: 'scale(0.7)' };
        case 'zoom-in':
          return { ...base, opacity: 0, transform: 'scale(1.08)' };
        default:
          return { ...base, opacity: 0 };
      }
    }

    return { ...base, opacity: 1, transform: 'none' };
  };

  return { ref, style: getStyle() };
}