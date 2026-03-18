import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import UIDesignApproach from './components/UIDesignApproach';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-sage-900 text-sage-900 dark:text-sage-100">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <UIDesignApproach />
      </main>
      <Footer />
    </div>
  );
}

export default App;
