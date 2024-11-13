import { useEffect, useCallback, useState } from "react";

interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useInView<T extends Element>(options: UseInViewOptions = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [element, setElement] = useState<T | null>(null);

    const ref = useCallback((node: T | null) => {
        if (node) {
            setElement(node);
        }
    }, []);

    useEffect(() => {
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: options.threshold || 0,
                rootMargin: options.rootMargin || "0px",
            },
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [element, hasAnimated, options.threshold, options.rootMargin]);

    return { ref, isVisible };
}
