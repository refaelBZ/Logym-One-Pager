"use client";
import { useEffect, useRef } from 'react';

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealImmediately(element) {
  element.classList.add('animate-in');
  element.querySelectorAll(
    '[data-stagger], .animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale, .timeline-step'
  ).forEach((child) => {
    child.classList.add('animate-in');
  });
  if (element.classList.contains('ken-burns')) {
    element.classList.add('ken-burns-active');
  }
}

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      revealImmediately(element);
      return;
    }

    const defaultOptions = {
      threshold: 0.1,
      triggerOnce: true,
      ...options
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');

            const staggeredChildren = entry.target.querySelectorAll('[data-stagger]');
            staggeredChildren.forEach((child) => {
              const staggerIndex = parseInt(child.dataset.stagger) || 0;
              setTimeout(() => {
                child.classList.add('animate-in');
              }, staggerIndex * (options.staggerDelay || 100));
            });

            const animatedChildren = entry.target.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale');
            animatedChildren.forEach((child, index) => {
              if (child.dataset.stagger) {
                const staggerIndex = parseInt(child.dataset.stagger) || 0;
                setTimeout(() => {
                  child.classList.add('animate-in');
                }, staggerIndex * (options.staggerDelay || 150));
              } else {
                setTimeout(() => {
                  child.classList.add('animate-in');
                }, index * (options.staggerDelay || 150));
              }
            });

            if (entry.target.classList.contains('timeline-line')) {
              setTimeout(() => {
                const steps = document.querySelectorAll('.timeline-step');
                steps.forEach((step, index) => {
                  setTimeout(() => {
                    step.classList.add('animate-in');
                    const stepChildren = step.querySelectorAll('.animate-slide-left, .animate-slide-right');
                    stepChildren.forEach(child => {
                      child.classList.add('animate-in');
                    });
                  }, index * 300);
                });
              }, 500);
            }

            if (entry.target.classList.contains('ken-burns')) {
              entry.target.classList.add('ken-burns-active');
            }

            if (defaultOptions.triggerOnce) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      defaultOptions
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return ref;
};

export const useImmediateAnimation = (delay = 200) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      revealImmediately(element);
      return;
    }

    const timer = setTimeout(() => {
      const staggeredChildren = element.querySelectorAll('[data-stagger]');
      staggeredChildren.forEach((child) => {
        const staggerIndex = parseInt(child.dataset.stagger) || 0;
        setTimeout(() => {
          child.classList.add('animate-in');
        }, staggerIndex * 150 + 200);
      });

      const otherAnimated = element.querySelectorAll('.animate-slide-left, .animate-slide-right, .animate-scale');
      otherAnimated.forEach((child, index) => {
        if (!child.dataset.stagger) {
          setTimeout(() => {
            child.classList.add('animate-in');
          }, index * 100 + 500);
        }
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return ref;
};
