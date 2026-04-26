import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { MapPin, GraduationCap, Award, Terminal, Briefcase } from 'lucide-react';

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center py-20 relative bg-gray-900 border-t border-green-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full font-mono">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Terminal Header */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-green-400 mb-4">
              <Terminal size={20} />
              <span>sourav@portfolio:~$</span>
              <span className="text-cyan-400">cat about.md</span>
            </div>
          </motion.div>
          
          <div className="border-l-2 border-green-400 pl-3 sm:pl-6 ml-1 sm:ml-2 space-y-8">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-green-400 mb-8"
            >
              # About Me
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <p className="text-sm sm:text-lg text-cyan-400 leading-relaxed">
                <span className="text-yellow-400">→</span> Hello! I'm <span className="text-white font-semibold">Sourav Tiwari</span>, a passionate Computer Science student 
                specializing in AI and Full Stack Development.
              </p>
              
              <p className="text-sm sm:text-lg text-cyan-400 leading-relaxed">
                <span className="text-yellow-400">→</span> Originally from <span className="text-white">Bihar</span>, 
                I'm currently pursuing my <span className="text-white font-semibold">B.Tech in CSE & IT</span> at Sagar Institute of Research and Technology, Bhopal.
              </p>

              <p className="text-sm sm:text-lg text-cyan-400 leading-relaxed">
                <span className="text-yellow-400">→</span> With a strong foundation in algorithms, data structures, and modern 
                web technologies, I love building intelligent systems that solve real-world problems.
              </p>

              <div className="flex items-center gap-3 text-green-400 mt-6">
                <MapPin size={18} />
                <span className="text-sm sm:text-lg">
                  <span className="text-gray-500">location:</span> Bihar → Bhopal, Madhya Pradesh
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 mt-8">
              <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-green-500/10 rounded">
                    <GraduationCap className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-400">
                      ## Education
                    </h3>
                    <p className="text-cyan-400 text-sm">
                      Sagar Institute of Research & Technology
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-cyan-400">
                  <div className="flex justify-between">
                    <span className="text-yellow-400">Degree:</span>
                    <span>B.Tech in CSE & IT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-400">Location:</span>
                    <span>Bhopal, MP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-400">CPI:</span>
                    <span className="text-green-400 font-bold">8.02</span>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-colors">
                  <Award size={24} className="mb-3 text-green-400" />
                  <p className="text-3xl font-bold mb-1 text-green-400">97%</p>
                  <p className="text-sm text-cyan-400">10th Grade</p>
                  <p className="text-xs text-gray-500">Punjab</p>
                </div>
                <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-colors">
                  <Award size={24} className="mb-3 text-green-400" />
                  <p className="text-3xl font-bold mb-1 text-green-400">88.4%</p>
                  <p className="text-sm text-cyan-400">12th Grade</p>
                  <p className="text-xs text-gray-500">Punjab</p>
                </div>
              </div>

              {/* Internship */}
              <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-green-500/10 rounded">
                    <Briefcase className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-400">## Internship</h3>
                    <p className="text-cyan-400 text-sm">ML & Backend Developer Intern – Coding Arena</p>
                  </div>
                </div>
                <div className="space-y-2 text-cyan-400 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-yellow-400">Duration:</span>
                    <span>Mar 2026 – Present</span>
                  </div>
                </div>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><span className="text-green-400">→</span><span>Designed and managed relational and non-relational databases with optimized SQL queries</span></li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><span className="text-green-400">→</span><span>Developed and integrated backend APIs ensuring data consistency, integrity, and security</span></li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm"><span className="text-green-400">→</span><span>Collaborated with the team to design and improve database schemas</span></li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
