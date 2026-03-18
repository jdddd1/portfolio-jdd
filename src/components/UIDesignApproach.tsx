import { useEffect } from 'react';
import anime from 'animejs';

const UIDesignApproach = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.approach-card',
            scale: [0.9, 1],
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(150),
            duration: 1000,
            easing: 'easeOutQuart'
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('#approach');
    if (section) observer.observe(section);
  }, []);

  const approaches = [
    {
      number: '01',
      title: 'User-Centered',
      desc: 'Every design decision is driven by user needs and feedback. I prioritize usability without compromising aesthetics.',
      color: 'bg-sage-100',
      textColor: 'text-sage-900'
    },
    {
      number: '02',
      title: 'Visual Hierarchy',
      desc: 'Clear visual hierarchy guides users through the interface intuitively, ensuring important elements stand out.',
      color: 'bg-sage-200',
      textColor: 'text-sage-900'
    },
    {
      number: '03',
      title: 'Performance',
      desc: 'Beautiful designs mean nothing without performance. I optimize for speed and smooth interactions.',
      color: 'bg-sage-300',
      textColor: 'text-white'
    },
    {
      number: '04',
      title: 'Accessibility',
      desc: 'Design for everyone. Inclusive design ensures your product is usable by people with varying abilities.',
      color: 'bg-sage-400',
      textColor: 'text-white'
    }
  ];

  return (
    <section id="approach" className="py-24 bg-sage-50 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-sage-900 mb-6">UI Design Approach</h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
            My approach to UI design combines aesthetic appeal with functional excellence. 
            I believe great design is invisible - it works so well that users don't think about it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index} 
              className={`approach-card group p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-start ${approach.color} ${approach.textColor} border border-white/20`}
            >
              <div className="text-6xl font-black mb-8 opacity-20 group-hover:opacity-40 transition-opacity">
                 {approach.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{approach.title}</h3>
              <p className="text-lg opacity-80 leading-relaxed">{approach.desc}</p>
              
              {/* Decorative line */}
              <div className="w-12 h-1 bg-white/30 rounded-full mt-auto pt-1 opacity-0 group-hover:opacity-100 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIDesignApproach;
