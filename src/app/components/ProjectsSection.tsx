import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Github, ExternalLink, Hospital, Shield, Terminal, Award } from 'lucide-react';

export function ProjectsSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      title: 'Hospital Management System',
      description: 'Analyzed client requirements and developed a responsive full-stack web app managing 100+ hospital records (patients, doctors, rooms) with real-time updates, improving data access efficiency by ~30%.',
      icon: Hospital,
      features: [
        'Documented system design, API specs, and test cases',
        'Handles 100+ patient, doctor, and room records',
        'Real-time updates — ~30% improved data access efficiency',
        'JWT Authentication & RESTful API architecture',
      ],
      tech: ['Node.js', 'Express.js', 'React', 'MongoDB', 'TypeScript', 'JWT', 'RESTful API'],
      github: 'https://github.com/saurav688/HEALTHLOCK-Hospital-Management-System',
      live: 'https://github.com/saurav688/HEALTHLOCK-Hospital-Management-System',
    },
    {
      title: 'AI/ML Crypto Primitive Identification in Firmware',
      description: 'Built an AI/ML pipeline to identify cryptographic primitives in firmware binaries — performed root cause analysis on false positives, improving detection accuracy and reducing manual analysis by ~40%.',
      icon: Shield,
      features: [
        'Root cause analysis on false positives, documented performance requirements',
        'Reduces manual analysis effort by ~40%',
        'Evaluated firmware modules; prepared technical reports for stakeholders',
        'Works across ARM, MIPS, and AVR architectures',
      ],
      tech: ['Python', 'PyTorch', 'NumPy', 'NetworkX', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/saurav688/SIH-2025-ML-CRYPTO-PRIMITIVE-IDENTIFICATION-FIRMWARE-DETECTION',
      live: 'https://github.com/saurav688/SIH-2025-ML-CRYPTO-PRIMITIVE-IDENTIFICATION-FIRMWARE-DETECTION',
    },
    {
      title: 'CertifiProof – AI-Powered Certificate Validation Platform',
      description: 'Built an AI-powered certificate authenticity validator using EfficientNet-B4 with ELA forensic analysis to detect tampered image regions — achieved automated fraud detection with GradCAM visual explanations.',
      icon: Award,
      features: [
        'EfficientNet-B4 (6-channel RGB+ELA) model with GradCAM visual explanations',
        'Tesseract OCR + fuzzy-matched against 50 Indian universities (NAAC)',
        'phi3/llama3 via Ollama for LLM-based forensic reasoning',
        'Downloadable PDF reports + email delivery via Gmail SMTP with JWT auth',
      ],
      tech: ['Python', 'EfficientNet-B4', 'Tesseract OCR', 'Ollama', 'GradCAM', 'JWT', 'Flask', 'Gmail SMTP'],
      github: 'https://github.com/saurav688',
      live: 'https://github.com/saurav688',
    },
    {
      title: 'Terminal-Based Command Line Interface',
      description: 'A powerful terminal-based CLI tool for managing system configurations and automating tasks across multiple operating systems.',
      icon: Terminal,
      features: [
        'Command-line interface for system management',
        'Automates repetitive tasks and workflows',
        'Configures system settings efficiently',
        'Supports multiple operating systems',
      ],
      tech: ['Bash', 'Python', 'Shell Scripting'],
      github: 'https://github.com/saurav688',
      live: 'https://github.com/saurav688',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center py-20 bg-gray-900 border-t border-green-500/20 font-mono"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
              <span className="text-cyan-400">ls projects/</span>
            </div>
          </motion.div>
          
          <div className="border-l-2 border-green-400 pl-3 sm:pl-6 ml-1 sm:ml-2">
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-4xl font-bold text-green-400 mb-8 sm:mb-12"
            >
              # Featured Projects
            </motion.h2>

            <div className="space-y-6">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    className="bg-gray-800 border border-green-500/30 rounded-lg p-4 sm:p-6 hover:border-green-500 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
                      <div className="p-2 sm:p-3 bg-green-500/10 rounded flex-shrink-0">
                        <Icon className="text-green-400" size={28} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-xl font-bold text-green-400 mb-2 leading-tight">
                          ## {project.title}
                        </h3>
                        <p className="text-cyan-400 text-xs sm:text-sm mb-4">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <p className="text-yellow-400 text-xs sm:text-sm mb-2">Features:</p>
                          <ul className="space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                                <span className="text-green-400 flex-shrink-0">→</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-900 border border-green-500/30 text-cyan-400 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <motion.a href={project.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-3 py-1 bg-gray-900 border border-green-500/30 text-green-400 rounded text-xs sm:text-sm hover:border-green-500 transition-colors">
                            <Github size={14} />
                            <span>[GitHub]</span>
                          </motion.a>
                          <motion.a href={project.live} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-3 py-1 bg-green-600 text-black rounded text-xs sm:text-sm hover:bg-green-500 transition-colors font-semibold">
                            <ExternalLink size={14} />
                            <span>[Live]</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}