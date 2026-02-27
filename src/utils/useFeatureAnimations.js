import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useFeatureAnimations
 * Shared GSAP ScrollTrigger hook for product & service pages.
 * - Image wrapper: fade-in + subtle scale reveal
 * - Feature cards (li): staggered slide-in from right, one by one
 * Call this inside any page component that renders .section-with-image sections:
 *   useFeatureAnimations(contentRef);
 */
export const useFeatureAnimations = (ref) => {
    useEffect(() => {
        if (!ref.current) return;

        let ctx;

        // Delay GSAP initialization to allow any smooth 'scroll-to-top' 
        // on page load to complete. This prevents sections from triggering 
        // their animations as they fly past the viewport during the scroll.
        const timer = setTimeout(() => {
            ctx = gsap.context(() => {
                const sections = ref.current.querySelectorAll('.section-with-image');

                sections.forEach((section) => {
                    const imageWrapper = section.querySelector('.section-image-wrapper');
                    const heading = section.querySelector('.section-text h2');
                    const paragraph = section.querySelectorAll('.section-text p');
                    const cards = section.querySelectorAll('.section-text li');

                    // --- Set initial hidden states (GSAP owns these, not CSS) ---
                    if (imageWrapper) gsap.set(imageWrapper, { opacity: 0, scale: 0.93, transformOrigin: 'center center' });
                    if (heading) gsap.set(heading, { opacity: 0, y: 18 });
                    if (paragraph.length) gsap.set(paragraph, { opacity: 0, y: 12 });
                    if (cards.length) gsap.set(cards, { opacity: 0, x: 28 });

                    // --- Scroll-triggered timeline ---
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%', // Triggers a bit later when well into viewport
                            once: true,
                        },
                    });

                    // 1. Image reveals with scale-up
                    if (imageWrapper) {
                        tl.to(imageWrapper, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.65,
                            ease: 'power3.out',
                        }, 0);
                    }

                    // 2. Heading fades up slightly after image starts
                    if (heading) {
                        tl.to(heading, {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            ease: 'power2.out',
                        }, 0.15);
                    }

                    // 3. Paragraph fades up
                    if (paragraph.length) {
                        tl.to(paragraph, {
                            opacity: 1,
                            y: 0,
                            duration: 0.45,
                            stagger: 0.08,
                            ease: 'power2.out',
                        }, 0.28);
                    }

                    // 4. Feature cards stagger slide in from the right
                    if (cards.length) {
                        tl.to(cards, {
                            opacity: 1,
                            x: 0,
                            duration: 0.38,
                            stagger: 0.07,
                            ease: 'power2.out',
                        }, 0.38);
                    }
                });

                // Add full-page snapping
                ScrollTrigger.create({
                    trigger: ref.current,
                    start: "top top",
                    end: "bottom bottom",
                    snap: {
                        snapTo: ".hero-container, section",
                        duration: { min: 0.2, max: 0.6 },
                        delay: 0.05, // delay after scrolling stops before snapping
                        ease: "power2.inOut"
                    }
                });

                // Ensure ScrollTrigger calculates positions correctly after init
                ScrollTrigger.refresh();
            }, ref);
        }, 800); // 800ms delay accommodates the smooth scroll to top

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);
};
