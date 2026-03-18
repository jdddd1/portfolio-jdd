import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial animation
    anime({
      targets: '.nav-item',
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutQuart'
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="nav-item">
          <a href="#" className="text-2xl font-black text-sage-900 tracking-tighter">JD<span className="text-sage-500">.</span></a>
        </div>
        
        <div className="hidden md:flex gap-12 items-center">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'About' ? 'profile' : item.toLowerCase()}`} 
              className="nav-item text-sm font-bold uppercase tracking-widest text-sage-900 hover:text-sage-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const targetId = item === 'About' ? 'profile' : item.toLowerCase();
                const element = document.getElementById(targetId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="nav-item">
          <button className="px-6 py-2 bg-sage-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform">
             Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
