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
                <span className="text-yellow-400">→</span> Hello! I'm <span className="text-white font-semibold">Sourav Tiwari</span>, a B.Tech Computer Science student (2027) with hands-on experience building scalable full-stack web applications using the MERN stack and AI/ML systems in Python.
              </p>
              
              <p className="text-sm sm:text-lg text-cyan-400 leading-relaxed">
                <span className="text-yellow-400">→</span> Pursuing <span className="text-white font-semibold">B.Tech in CSE & IT</span> at Sagar Institute of Research and Technology, Bhopal. Skilled at translating business requirements into clean, well-documented code and delivering within Agile sprint cycles.
              </p>

              <p className="text-sm sm:text-lg text-cyan-400 leading-relaxed">
                <span className="text-yellow-400">→</span> <span className="text-white font-semibold">SIH 2025 Finalist</span> and <span className="text-white font-semibold">Microsoft Learn Student Ambassador</span> — passionate about building intelligent systems that solve real-world problems.
              </p>

              <div className="flex items-center gap-3 text-green-400 mt-6">
                <MapPin size={18} />
                <span className="text-sm sm:text-lg">
                  <span className="text-gray-500">location:</span> Bhopal, Madhya Pradesh
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
                    <span className="text-green-400 font-bold">8.20/10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-400">Coursework:</span>
                    <span className="text-xs">DSA, OOP, DBMS, OS, Networks</span>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-colors">
                  <Award size={24} className="mb-3 text-green-400" />
                  <p className="text-3xl font-bold mb-1 text-green-400">96.99%</p>
                  <p className="text-sm text-cyan-400">10th Grade</p>
                  <p className="text-xs text-gray-500">St. Pius Convent Sr. Sec. School, Punjab</p>
                </div>
                <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-colors">
                  <Award size={24} className="mb-3 text-green-400" />
                  <p className="text-3xl font-bold mb-1 text-green-400">88.4%</p>
                  <p className="text-sm text-cyan-400">12th Grade</p>
                  <p className="text-xs text-gray-500">Punjab</p>
                </div>
              </div>

              {/* Internships */}
              <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-green-500/10 rounded">
                    <Briefcase className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-400">## Internships</h3>
                    <p className="text-cyan-400 text-sm">Recent Work Experience</p>
                  </div>
                </div>

                {/* Internship 1 - Government */}
                <div className="mb-5">
                  <div className="flex flex-wrap justify-between items-center mb-2 gap-1">
                    <span className="text-green-400 font-semibold text-sm">AI/ML and Software Development Intern</span>
                    <span className="text-gray-500 text-xs">Sept 2026 – Present</span>
                  </div>
                  <p className="text-yellow-400 text-xs mb-2">Government Of India Organisation | ₹30,000/month</p>
                  <ul className="space-y-1 mb-2">
                    <li className="flex items-start gap-2 text-gray-400 text-sm"><span className="text-green-400 flex-shrink-0">→</span><span>Contributing to software development, debugging, testing, and backend-oriented technical tasks</span></li>
                    <li className="flex items-start gap-2 text-gray-400 text-sm"><span className="text-green-400 flex-shrink-0">→</span><span>Working with development tools, databases, APIs, and secure software engineering practices</span></li>
                  </ul>
                  <p className="text-xs text-gray-600">Stack: React.js · Python · AI/ML · PostgreSQL · Ubuntu · Linux · Fast API · Docker . Computer Vision </p>
                </div>

                {/* Internship 2 - Coding Arena */}
                <div className="border-t border-green-500/10 pt-4 mb-5">
                  <div className="flex flex-wrap justify-between items-center mb-2 gap-1">
                    <span className="text-green-400 font-semibold text-sm">Full Stack Development Intern</span>
                    <span className="text-gray-500 text-xs">Jul 2026 – Sept 2026</span>
                  </div>
                  <p className="text-yellow-400 text-xs mb-2">Coding Arena</p>
                  <ul className="space-y-1 mb-2">
                    <li className="flex items-start gap-2 text-gray-400 text-sm"><span className="text-green-400 flex-shrink-0">→</span><span>Developed responsive full-stack apps with React.js, Node.js, Express.js & MongoDB — RESTful APIs, JWT auth, CRUD functionality</span></li>
                    <li className="flex items-start gap-2 text-gray-400 text-sm"><span className="text-green-400 flex-shrink-0">→</span><span>Followed SDLC — testing, debugging, clean code with Git, Agile sprint delivery</span></li>
                  </ul>
                  <p className="text-xs text-gray-600">Stack: React.js · Node.js · Express.js · MongoDB · JWT · REST APIs · Vercel · Render</p>
                </div>

                <div className="border-t border-green-500/10 pt-4">
                  <div className="flex flex-wrap justify-between items-center mb-2 gap-1">
                    <span className="text-green-400 font-semibold text-sm">ML & Backend Developer Intern</span>
                    <span className="text-gray-500 text-xs">Mar 2026 – Jun 2026</span>
                  </div>
                  <p className="text-yellow-400 text-xs mb-2">Coding Arena</p>
                  <ul className="space-y-1 mb-2">
                    <li className="flex items-start gap-2 text-gray-400 text-sm"><span className="text-green-400 flex-shrink-0">→</span><span>Designed and implemented 15+ REST API endpoints using Node.js and Express.js, reducing average API response time by 25%</span></li>
                    <li className="flex items-start gap-2 text-gray-400 text-sm"><span className="text-green-400 flex-shrink-0">→</span><span>Developed and optimized machine learning models in Python, improving prediction accuracy by 20% across 5 classification pipelines while automating data workflows to save 8 hours per week</span></li>
                  </ul>
                  <p className="text-xs text-gray-600">Stack: Node.js · Express.js · React.js · Python · Machine Learning · FastApi .  MongoDB · Agile</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
