import gsap from 'gsap';
import MouseFollower from 'mouse-follower';
//
export default function Cursor() {
  //
  try {
    MouseFollower.registerGSAP(gsap);
    //
    const cursor = new MouseFollower({
      container: document.documentElement,
      speed: 1.5,
      skewingText: 0,
      stateDetection: {
        '-hidden': '.sidebar-nav',
      },
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
  //
}
