import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
}

export function useParticleAnimation(count = 20) {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      duration: number;
      delay: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 20,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, [count]);

  return particles;
}
