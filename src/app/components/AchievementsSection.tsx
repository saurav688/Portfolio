import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Trophy, Award, BookOpen, Users, FileText, Globe, Terminal, Star } from 'lucide-react';

export function AchievementsSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const achievements = [
    {
      title: 'SIH 2025 Finalist',
      description: 'Selected among top teams nationally out of 10,000+ Smart India Hackathon entries',
      icon: Trophy,
      year: '2025',
    },
    {
      title: 'SolveExpo 2026 — 3rd Runner-Up',
      description: 'Awarded 3rd Runner-Up for presenting an innovative web-based project to 50+ judges',
      icon: Award,
      year: '2026',
    },
    {
      title: 'YUKTI 2025 & Anveshana 2025 Semifinalist',
      description: 'Reached the semifinals in two national-level innovation competitions',
      icon: Star,
      year: '2025',
    },
    {
      title: 'Microsoft Learn Student Ambassador',
      description: 'Engaged 100+ learners in web development and cloud topics across 5+ workshops',
      icon: Users,
      year: '2025',
    },
    {
      title: 'NPTEL – Introduction to Machine Learning',
      description: 'Scored 57% in NPTEL ML certification — 2026',
      icon: BookOpen,
      year: '2026',
    },
    {
      title: 'Google Cloud Arcade',
      description: 'Completed 10+ cloud labs and earned multiple GCP skill badges — June 2025',
      icon: Globe,
      year: '2025',
    },
    {
      title: 'NPTEL – Programming in Java',
      description: 'Scored 68% in NPTEL Java certification — 2025',
      icon: BookOpen,
      year: '2025',
    },
    {
      title: 'Research Publication (IJAR)',
      description: 'Paper published & presented at an International Conference (IJAR, ISSN: 2455-6211) — June 2024',
      icon: FileText,
      year: '2024',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="achievements"
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
              <span className="text-cyan-400">cat achievements.log</span>
            </div>
          </motion.div>
          
          <div className="border-l-2 border-green-400 pl-3 sm:pl-6 ml-1 sm:ml-2">
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-4xl font-bold text-green-400 mb-8 sm:mb-12"
            >
              # Achievements & Certifications
            </motion.h2>

            <div className="space-y-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;

                return (
                  <motion.div
                    key={achievement.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, x: 4 }}
                    className="bg-gray-800 border border-green-500/30 rounded-lg p-5 hover:border-green-500 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-500/10 rounded flex-shrink-0">
                        <Icon className="text-green-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-sm sm:text-lg font-bold text-green-400 leading-tight">
                            [{achievement.year}] {achievement.title}
                          </h3>
                        </div>
                        <p className="text-cyan-400 text-sm">
                          → {achievement.description}
                        </p>
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