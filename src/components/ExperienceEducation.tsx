import { useEffect } from 'react';
import anime from 'animejs';

const ExperienceEducation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.timeline-item',
            translateX: [-50, 0],
            opacity: [0, 1],
            delay: anime.stagger(200),
            duration: 1000,
            easing: 'easeOutQuart'
          });

          anime({
            targets: '.timeline-dot',
            scale: [0, 1.5, 1],
            opacity: [0, 1],
            delay: anime.stagger(200, { start: 500 }),
            duration: 1000,
            easing: 'easeOutElastic(1, .8)'
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('#experience');
    if (section) observer.observe(section);
  }, []);

  const experience = [
    {
      title: 'Freelance Web Developer',
      company: 'Freelance',
      period: '2023 - Present',
      desc: 'Designing and developing responsive web applications using React and Tailwind CSS. Specializing in UI/UX design and front-end development for diverse client projects.'
    },
    {
      title: 'Freelance Tech Support',
      company: 'Freelance',
      period: '2022 - Present',
      desc: 'Providing PC troubleshooting, system optimization, and custom PC building services. Supporting clients with technical issues and hardware recommendations.'
    }
  ];

  const education = [
    {
      title: 'Bachelor of Science in Information Technology',
      school: 'San Pedro College Business and Administration',
      status: 'Completed',
      desc: 'Focus on Web Development and Database Management. Completed Capstone Project on UI Design and responsive web applications.'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-sage-900 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience Section */}
          <div>
            <h2 className="text-4xl font-bold text-sage-900 dark:text-white mb-16 border-l-8 border-sage-400 pl-6">Experience</h2>
            <div className="relative border-l border-sage-100 dark:border-sage-700 ml-4 space-y-16 py-4">
              {experience.map((item, index) => (
                <div key={index} className="timeline-item relative pl-12 opacity-0">
                  <div className="timeline-dot absolute -left-[13px] top-0 w-6 h-6 bg-sage-500 rounded-full border-4 border-white dark:border-sage-900 shadow-md"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-2xl font-bold text-sage-900 dark:text-white leading-tight">{item.title}</h3>
                    <span className="text-sage-500 dark:text-sage-400 font-semibold tracking-wide text-sm whitespace-nowrap mt-1 sm:mt-0">{item.period}</span>
                  </div>
                  <p className="text-sage-600 dark:text-sage-300 font-medium mb-4 italic">{item.company}</p>
                  <p className="text-sage-700 dark:text-sage-300 leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-4xl font-bold text-sage-900 dark:text-white mb-16 border-l-8 border-sage-200 pl-6">Education</h2>
            <div className="relative border-l border-sage-100 dark:border-sage-700 ml-4 space-y-16 py-4">
              {education.map((item, index) => (
                <div key={index} className="timeline-item relative pl-12 opacity-0">
                  <div className="timeline-dot absolute -left-[13px] top-0 w-6 h-6 bg-sage-200 rounded-full border-4 border-white dark:border-sage-900 shadow-md"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-2xl font-bold text-sage-900 dark:text-white leading-tight">{item.title}</h3>
                    <span className="bg-sage-100 dark:bg-sage-800 text-sage-600 dark:text-sage-300 px-3 py-1 rounded-full text-xs font-bold mt-1 sm:mt-0 uppercase tracking-widest">{item.status}</span>
                  </div>
                  <p className="text-sage-600 dark:text-sage-300 font-medium mb-4 italic">{item.school}</p>
                  <p className="text-sage-700 dark:text-sage-300 leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
