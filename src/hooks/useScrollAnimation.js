// src/hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export const useStaggeredAnimation = (items, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * delay);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [items, delay]);

  return [ref, visibleItems];
};

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
};
