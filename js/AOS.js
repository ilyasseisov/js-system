import AOS from 'aos';

export default function AnimateOnScroll() {
  //
  try {
    AOS.init({
      duration: 1000,
      offset: 320,
      once: true,
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
  //
}
