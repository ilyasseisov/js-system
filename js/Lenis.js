import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

export default function SmoothScroll() {
  //
  try {
    gsap.registerPlugin(ScrollTrigger);
    // Lenis smooth scrolling
    //
    const lenis = new Lenis({
      isSmooth: true,
      smoothWheel: true,
      duration: 2,
    });

    lenis.on('scroll', (e) => {});

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  } catch (error) {
    console.error('An error occurred:', error);
  }
  //
}
