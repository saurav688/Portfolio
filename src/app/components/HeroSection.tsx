import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Code, ChevronDown, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'cat sourav_tiwari.txt';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="text-left font-mono">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-2 text-green-400 mb-2 text-xs sm:text-sm">
              <Terminal size={16} />
              <span>sourav@portfolio:~$</span>
              <span className="text-green-400">{displayText}</span>
              <span className="animate-pulse">▊</span>
            </div>
            <div className="border-l-2 border-green-400 pl-3 sm:pl-4 ml-1 sm:ml-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="overflow-x-auto mb-4">
                  <pre className="text-green-400 text-[7px] xs:text-[9px] sm:text-xs leading-tight min-w-0">
{`╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║     ███████╗ ██████╗ ██╗   ██╗██████╗  █████╗ ██╗   ██╗ ║
║     ██╔════╝██╔═══██╗██║   ██║██╔══██╗██╔══██╗██║   ██║ ║
║     ███████╗██║   ██║██║   ██║██████╔╝███████║██║   ██║ ║
║     ╚════██║██║   ██║██║   ██║██╔══██╗██╔══██║╚██╗ ██╔╝ ║
║     ███████║╚██████╔╝╚██████╔╝██║  ██║██║  ██║ ╚████╔╝  ║
║     ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝   ║
║                    TIWARI                                 ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝`}
                  </pre>
                </div>

                <p className="text-cyan-400 text-sm sm:text-lg mb-2">
                  <span className="text-yellow-400">Role:</span> Full Stack & AI/ML Developer
                </p>
                <p className="text-cyan-400 text-sm sm:text-lg mb-2">
                  <span className="text-yellow-400">Status:</span> Building Scalable MERN Apps & AI Systems
                </p>
                <p className="text-gray-400 text-sm sm:text-base mb-6">
                  <span className="text-yellow-400">Description:</span> B.Tech CSE & IT student (2027) | SIH 2025 Finalist | Microsoft Learn Student Ambassador | Software Development & AI/ML Intern @ Govt. of India
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="px-4 sm:px-6 py-2 bg-green-600 text-black rounded hover:bg-green-500 transition-colors font-semibold text-sm sm:text-base"
                  >
                    [CONTACT]
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-all font-semibold text-sm sm:text-base"
                  >
                    [DOWNLOAD RESUME]
                  </a>
                </div>

                <div className="flex gap-4 text-green-400">
                  <motion.a href="https://github.com/saurav688" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="hover:text-green-500 transition-colors">
                    <Github size={22} />
                  </motion.a>
                  <motion.a href="https://www.linkedin.com/in/sourav-tiwari-328bb1277/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="hover:text-green-500 transition-colors">
                    <Linkedin size={22} />
                  </motion.a>
                  <motion.a href="https://leetcode.com/u/Saurav_688/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="hover:text-green-500 transition-colors">
                    <Code size={22} />
                  </motion.a>
                  <motion.a href="mailto:sourav688tiwari@gmail.com" whileHover={{ scale: 1.1 }} className="hover:text-green-500 transition-colors">
                    <Mail size={22} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2 }, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400"
      >
        <ChevronDown size={36} />
      </motion.button>
    </section>
  );
}