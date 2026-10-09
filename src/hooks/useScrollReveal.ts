import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.01) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal parent if it is an init element
            if (entry.target.classList.contains('reveal-init')) {
              entry.target.classList.add('is-revealed');
            }
            // Reveal all child elements
            const children = entry.target.querySelectorAll('.reveal-init');
            children.forEach((child) => child.classList.add('is-revealed'));
            
            // Once revealed, unobserve to retain state
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '300px 0px 150px 0px'
      }
    );

    observer.observe(el);

    // Also observe any direct reveal elements inside
    const targets = el.querySelectorAll('.reveal-init');
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}
