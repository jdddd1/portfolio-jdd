import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import anime from 'animejs';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TWEEN_FACTOR_BASE = 0.5;

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const projects = [
    { id: 1, title: 'Project One', desc: 'A premium web application built with React and Tailwind CSS.', color: 'bg-sage-200', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' },
    { id: 2, title: 'Project Two', desc: 'Next-gen e-commerce interface with seamless user experience.', color: 'bg-sage-300', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000' },
    { id: 3, title: 'Project Three', desc: 'Custom database management system for enterprise clients.', color: 'bg-sage-400', image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=1000' },
    { id: 4, title: 'Project Four', desc: 'Modern PC building and troubleshooting service platform.', color: 'bg-sage-500', image: 'https://images.unsplash.com/photo-1591439657443-087395ef3961?auto=format&fit=crop&q=80&w=1000' },
  ];

  const setTweenNodes = useCallback((emblaApi: any) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode: HTMLElement) => {
      return slideNode.querySelector('.parallax-layer');
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: any) => {
    const snapList = emblaApi.scrollSnapList();
    if (!snapList) return;
    tweenFactor.current = TWEEN_FACTOR_BASE * snapList.length;
  }, []);

  const tweenParallax = useCallback((emblaApi: any, eventName?: string) => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    if (!engine || !engine.indexGroups || !engine.slideLooper) return;
    
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';
    const snapList = emblaApi.scrollSnapList();

    if (!snapList) return;

    snapList.forEach((scrollSnap: number, snapIndex: number) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.indexGroups ? engine.indexGroups[snapIndex] : undefined;
      if (!slidesInSnap) return;

      slidesInSnap.forEach((slideIndex: number) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop && engine.slideLooper.loopPoints) {
          engine.slideLooper.loopPoints.forEach((loopPoint: any) => {
            const target = loopPoint.target();

            if (slideIndex === loopPoint.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          // Use a smoother transform for the parallax effect
          tweenNode.style.transform = `translate3d(${translate}%, 0, 0)`;
        }
      });
    });
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const snap = emblaApi.selectedScrollSnap();
    if (typeof snap === 'number') {
      setSelectedIndex(snap);
    }
    
    anime({
      targets: '.project-content',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutQuart'
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('select', onSelect);
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="py-24 bg-sage-50 dark:bg-sage-800 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-sage-900 dark:text-white mb-16 uppercase tracking-widest">Projects</h2>
        
        <div className="relative max-w-4xl mx-auto group">
          <div className="overflow-hidden rounded-[40px] shadow-2xl border-8 border-white dark:border-sage-900 bg-white dark:bg-sage-900" ref={emblaRef}>
            <div className="flex touch-pan-y h-[450px]">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex-[0_0_100%] min-w-0 relative overflow-hidden"
                >
                  {/* Parallax Image Container */}
                  <div className="parallax-layer absolute inset-0 w-[120%] -left-[10%] h-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-40 dark:opacity-20"
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className={`absolute inset-0 w-full h-full flex items-center justify-center p-12 bg-black/40`}>
                    <div className="project-content text-white max-w-lg z-10">
                       <h3 className="text-5xl font-black mb-6 drop-shadow-lg uppercase tracking-tighter leading-none">{project.title}</h3>
                       <p className="text-xl opacity-90 mb-10 leading-relaxed font-light drop-shadow-md">{project.desc}</p>
                       <button className="px-10 py-4 bg-white text-sage-900 rounded-full font-black uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
                          View Project
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollPrev}
            className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-white dark:bg-sage-800 border border-sage-100 dark:border-sage-700 rounded-full flex items-center justify-center text-sage-900 dark:text-white shadow-xl hover:bg-sage-900 hover:text-white dark:hover:bg-white dark:hover:text-sage-900 transition-all z-10"
          >
            <ArrowLeft size={24} strokeWidth={1.5} />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-white dark:bg-sage-800 border border-sage-100 dark:border-sage-700 rounded-full flex items-center justify-center text-sage-900 dark:text-white shadow-xl hover:bg-sage-900 hover:text-white dark:hover:bg-white dark:hover:text-sage-900 transition-all z-10"
          >
            <ArrowRight size={24} strokeWidth={1.5} />
          </button>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
             {projects.map((_, index) => (
               <div 
                 key={index}
                 onClick={() => emblaApi && emblaApi.scrollTo(index)}
                 className={`h-1 transition-all duration-500 cursor-pointer ${index === selectedIndex ? 'w-12 bg-sage-600 dark:bg-sage-400' : 'w-4 bg-sage-200 dark:bg-sage-700 hover:bg-sage-300 dark:hover:bg-sage-600'}`}
               ></div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
