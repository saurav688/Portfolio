import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import {
  Code2,
  Layout,
  Database,
  Wrench,
  Sparkles,
  Brain,
  Terminal,
} from 'lucide-react';

export function SkillsSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Java', 'C', 'C++', 'Python', 'SQL'],
    },
    {
      title: 'Development',
      icon: Layout,
      color: 'from-indigo-500 to-purple-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Fast API', 'RESTful API', 'JWT Auth'],
    },
    {
      title: 'ML & AI',
      icon: Brain,
      color: 'from-violet-500 to-fuchsia-500',
      skills: ['Machine Learning', 'LLM Integration', 'Ollama', 'Prompt Engineering', 'AI Agents', 'Google Gemini AI'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'Query Optimization'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-pink-500 to-rose-500',
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'AWS', 'Google Cloud', 'Linux', 'Vercel', 'Render'],
    },
    {
      title: 'Core Skills',
      icon: Sparkles,
      color: 'from-green-500 to-emerald-500',
      skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks', 'SDLC', 'Agile/Scrum', 'Software Testing'],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
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
              <span className="text-cyan-400">ls -la skills/</span>
            </div>
          </motion.div>
          
          <div className="border-l-2 border-green-400 pl-3 sm:pl-6 ml-1 sm:ml-2">
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-4xl font-bold text-green-400 mb-8 sm:mb-12"
            >
              # Skills & Technologies
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-gray-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-500/10 rounded">
                        <Icon className="text-green-400" size={24} />
                      </div>
                    <h3 className="text-sm sm:text-lg font-bold text-green-400 leading-tight">
                        ## {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gray-900 border border-green-500/30 text-cyan-400 rounded text-sm hover:border-green-500 hover:text-green-400 transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
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