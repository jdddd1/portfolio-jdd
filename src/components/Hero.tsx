import { useEffect, useRef } from 'react';
import anime from 'animejs';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const heroRef = useRef(null);
  const boxesRef = useRef(null);

  useEffect(() => {
    // Background boxes animation
    anime({
      targets: '.hero-box',
      scale: [0, 1],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 500 }),
      duration: 1000,
      easing: 'easeOutElastic(1, .8)'
    });

    // Text reveal animation
    anime({
      targets: '.hero-text',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 1000 }),
      duration: 800,
      easing: 'easeOutQuad'
    });

    // Floating animation for the image boxes
    anime({
      targets: '.hero-box-float',
      translateY: [-10, 10],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(150)
    });
  }, []);

  return (
    <section ref={heroRef} className="relative min-height-[90vh] flex flex-col items-center justify-center bg-white px-6 py-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-left">
          <div className="hero-text overflow-hidden mb-2">
            <span className="text-sage-600 font-medium tracking-wider uppercase text-sm">Front-end Developer</span>
          </div>
          <h1 className="hero-text text-6xl lg:text-8xl font-bold text-sage-900 leading-tight mb-6">
            Joshua Dee <br /> Tulali
          </h1>
          <p className="hero-text text-lg text-sage-700 max-w-lg mb-8 leading-relaxed">
            Front-end Developer specializing in responsive, user-focused web interfaces. 
            Passionate about translating design into clean, intuitive, and accessible experiences.
          </p>
          <div className="hero-text flex gap-4">
            <button className="px-8 py-3 bg-sage-600 text-white rounded-full font-medium hover:bg-sage-700 transition-colors">
              View Work
            </button>
            <button className="px-8 py-3 border-2 border-sage-600 text-sage-600 rounded-full font-medium hover:bg-sage-50 transition-colors">
              Contact Me
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[500px]" ref={boxesRef}>
          {/* Decorative Sage Boxes inspired by the first image */}
          <div className="hero-box hero-box-float absolute top-0 left-0 w-64 h-48 bg-sage-200 rounded-2xl shadow-lg -rotate-6 z-0"></div>
          <div className="hero-box hero-box-float absolute top-10 right-0 w-72 h-56 bg-sage-300 rounded-2xl shadow-xl rotate-3 z-10 flex items-end p-6">
             <div className="w-full h-2 bg-sage-400 rounded-full opacity-50"></div>
          </div>
          <div className="hero-box hero-box-float absolute bottom-0 left-20 w-80 h-64 bg-sage-100 rounded-2xl shadow-2xl -rotate-2 z-20 overflow-hidden border-8 border-white">
            <img src={profileImg} alt="Joshua Dee Tulali" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          
          {/* Circular accents */}
          <div className="hero-box absolute -bottom-10 -right-10 w-32 h-32 bg-sage-500 rounded-full opacity-20 blur-2xl"></div>
          <div className="hero-box absolute -top-10 -left-10 w-40 h-40 bg-sage-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-sage-900 h-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
