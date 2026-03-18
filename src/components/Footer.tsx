import { useEffect } from 'react';
import anime from 'animejs';
import { Mail, ArrowUpRight, Send, ThumbsUp, Smile, Globe, Eye } from 'lucide-react';

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.footer-reveal',
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutQuart'
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('#contact');
    if (section) observer.observe(section);
  }, []);

  return (
    <footer id="contact" className="bg-white dark:bg-sage-900 text-black dark:text-white pt-24 border-t border-black/10 dark:border-white/10 overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Landscape Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-black dark:border-white bg-white dark:bg-black mb-24">
          
          {/* Get In Touch - Left Side */}
          <div className="lg:col-span-7 bg-black text-white p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black dark:border-white">
            <div className="footer-reveal">
              <div className="flex items-center gap-4 mb-8">
                <Mail size={32} strokeWidth={1} />
                <span className="text-xs font-black uppercase tracking-[0.4em] opacity-60">Contact</span>
              </div>
              <h2 className="text-5xl lg:text-8xl font-black uppercase mb-8 tracking-tighter leading-none">GET IN <br/> TOUCH</h2>
              <p className="text-lg lg:text-xl font-light mb-12 opacity-80 max-w-md">Have a project in mind? Let's create something extraordinary together.</p>
              
              <a 
                href="mailto:joshua.tulali133@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Joshua,%20I'm%20interested%20in%20your%20services!"
                className="bg-white text-black py-6 px-8 flex justify-between items-center max-w-sm cursor-pointer group hover:bg-gray-100 transition-colors shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em]">SEND ME A MESSAGE</span>
                <Send size={18} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side - Socials and Info */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Top Row - Status Icons */}
            <div className="grid grid-cols-2 border-b border-black dark:border-white">
              <div className="border-r border-black dark:border-white p-12 flex items-center justify-center bg-white dark:bg-black hover:bg-sage-50 dark:hover:bg-sage-900 transition-colors">
                <ThumbsUp size={48} strokeWidth={1} />
              </div>
              <div className="p-12 flex items-center justify-center bg-white dark:bg-black hover:bg-sage-50 dark:hover:bg-sage-900 transition-colors">
                <Smile size={48} strokeWidth={1} />
              </div>
            </div>

            {/* Middle Rows - Social Links */}
            <div className="flex-grow">
              {[
                { label: 'LINKEDIN', icon: <ArrowUpRight size={24} strokeWidth={1} />, url: 'https://www.linkedin.com/in/joshua-tulali-77331830b/' },
             { label: 'GITHUB', icon: <ArrowUpRight size={24} strokeWidth={1} />, url: 'https://github.com/jdddd1' },
             { label: 'PRIVACY', icon: <Eye size={24} strokeWidth={1} />, url: '#' }
           ].map((social, idx) => (
             <a 
               key={idx} 
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               className="footer-reveal border-b last:border-b-0 border-black dark:border-white py-8 px-10 flex justify-between items-center bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-sage-900 transition-colors cursor-pointer group"
             >
                <span className="text-sm font-bold uppercase tracking-[0.2em]">{social.label}</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-60 group-hover:opacity-100">
                   {social.icon}
                </span>
             </a>
              ))}
            </div>

            {/* Bottom Row - Globe & Copyright */}
            <div className="grid grid-cols-3 border-t border-black dark:border-white mt-auto">
               <div className="p-8 border-r border-black dark:border-white flex items-center justify-center">
                  <Globe size={32} strokeWidth={1} />
               </div>
               <div className="col-span-2 p-6 flex flex-col justify-center bg-[#fafafa] dark:bg-black">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mb-1">© Joshua Dee Tulali 2026</p>
                  <p className="text-[8px] font-bold opacity-30 uppercase tracking-widest">Binan, Philippines</p>
               </div>
            </div>
          </div>
        </div>

      </div>

      {/* Huge Minimalist Background Text */}
      <div className="relative w-full h-80 overflow-hidden pointer-events-none select-none opacity-[0.07] dark:opacity-[0.03] mt-12">
         <div className="absolute bottom-0 left-0 text-[28vw] font-black leading-none whitespace-nowrap tracking-tighter uppercase translate-y-1/4">
            JDTULALI
         </div>
      </div>
    </footer>
  );
};

export default Footer;
