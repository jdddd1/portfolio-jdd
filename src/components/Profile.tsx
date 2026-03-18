import { useEffect } from 'react';
import anime from 'animejs';
import profileImg from '../assets/profile.jpg';
import { Monitor, Palette, Wrench, Database } from 'lucide-react';

const Profile = () => {
  useEffect(() => {
    anime({
      targets: '.profile-section',
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(150),
      duration: 1000,
      easing: 'easeOutQuart',
      autoplay: false,
      loop: false
    });

    // Observer to trigger animation when section comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.profile-section',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150),
            duration: 1000,
            easing: 'easeOutQuart'
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const section = document.querySelector('#profile');
    if (section) observer.observe(section);
  }, []);

  return (
    <section id="profile" className="py-24 bg-sage-50 dark:bg-sage-800 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="profile-section text-4xl font-bold text-sage-900 dark:text-white mb-12 uppercase tracking-widest">Profile</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start text-left">
          {/* Profile Image Column */}
          <div className="profile-section relative group">
             <div className="absolute inset-0 bg-sage-600 dark:bg-sage-700 rounded-[40px] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
             <div className="relative aspect-square overflow-hidden rounded-[40px] border-8 border-white dark:border-sage-900 shadow-2xl">
                <img src={profileImg} alt="Joshua Dee Tulali" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
             </div>
          </div>

          {/* Description Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="profile-section space-y-6">
               <p className="text-2xl leading-relaxed text-sage-900 dark:text-sage-100 font-medium">
                  Front-end Developer specializing in responsive, user-focused web interfaces. 
                  Passionate about translating design into clean, intuitive, and accessible front-end experiences.
               </p>
               <p className="text-lg leading-relaxed text-gray-600 dark:text-sage-300">
                  With expertise in React, Tailwind CSS, and modern web technologies, I create seamless digital experiences 
                  that combine aesthetic excellence with functional precision.
               </p>
            </div>
            
            <div className="profile-section pt-8 border-t border-sage-200 dark:border-sage-700">
              <h3 className="text-sm font-black uppercase tracking-widest text-sage-500 dark:text-sage-400 mb-8">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Web Development', desc: 'React + Tailwind + PHP', icon: <Monitor size={32} strokeWidth={1.5} className="text-sage-600 dark:text-sage-300" /> },
                  { title: 'UI/UX Design', desc: 'Responsive & User-Centered', icon: <Palette size={32} strokeWidth={1.5} className="text-sage-600 dark:text-sage-300" /> },
                  { title: 'Tech Support', desc: 'PC troubleshooting & building', icon: <Wrench size={32} strokeWidth={1.5} className="text-sage-600 dark:text-sage-300" /> },
                  { title: 'Database Management', desc: 'SQL & Backend', icon: <Database size={32} strokeWidth={1.5} className="text-sage-600 dark:text-sage-300" /> }
                ].map((item, index) => (
                  <div key={index} className="bg-white dark:bg-sage-900 p-6 rounded-[32px] shadow-sm border border-sage-100 dark:border-sage-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-bold text-sage-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-sage-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
