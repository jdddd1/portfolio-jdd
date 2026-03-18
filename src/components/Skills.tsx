import { useEffect, useRef } from 'react';
import anime from 'animejs';

const Skills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { name: 'React', level: 82, color: 'var(--color-sage-400)' },
    { name: 'Tailwind CSS', level: 88, color: 'var(--color-sage-600)' },
    { name: 'JavaScript', level: 80, color: 'var(--color-sage-500)' },
    { name: 'PHP', level: 75, color: 'var(--color-sage-700)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.skill-bar-fill',
            width: (el: HTMLElement) => el.getAttribute('data-level') + '%',
            delay: anime.stagger(200),
            duration: 1500,
            easing: 'easeInOutQuart'
          });

          anime({
            targets: '.skill-item',
            translateX: [-50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150),
            duration: 1000,
            easing: 'easeOutQuart'
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (skillsRef.current) observer.observe(skillsRef.current);
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-24 bg-white px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-sage-900 mb-16">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-sage-800">{skill.name}</span>
                <span className="text-lg font-bold text-sage-600">{skill.level}%</span>
              </div>
              <div className="h-4 bg-sage-50 rounded-full overflow-hidden shadow-inner border border-sage-100">
                <div 
                  className="skill-bar-fill h-full rounded-full shadow-lg"
                  style={{ backgroundColor: skill.color, width: '0%' }}
                  data-level={skill.level}
                ></div>
              </div>
              
              {/* Decorative elements for Anime.js to target */}
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-sage-200 rounded-full"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
