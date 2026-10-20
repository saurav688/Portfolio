import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, Linkedin, Github, Code, Terminal, MapPin } from 'lucide-react';

export function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhopal, Madhya Pradesh',
      href: '#',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7719710557',
      href: 'tel:7719710557',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sourav688tiwari@gmail.com',
      href: 'mailto:sourav688tiwari@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sourav-tiwari-328bb1277',
      href: 'https://www.linkedin.com/in/sourav-tiwari-328bb1277/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/saurav688',
      href: 'https://github.com/saurav688',
    },
    {
      icon: Code,
      label: 'LeetCode',
      value: 'leetcode.com/u/Saurav_688',
      href: 'https://leetcode.com/u/Saurav_688/',
    },
    {
      icon: Terminal,
      label: 'Portfolio',
      value: 'sourav-portfolio-9utk.onrender.com',
      href: 'https://sourav-portfolio-9utk.onrender.com/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center py-20 bg-gray-900 border-t border-green-500/20 font-mono"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-2 text-green-400 mb-4">
              <Terminal size={20} />
              <span>sourav@portfolio:~$</span>
              <span className="text-cyan-400">cat contact.sh</span>
            </div>
          </motion.div>

          <div className="border-l-2 border-green-400 pl-3 sm:pl-6 ml-1 sm:ml-2">
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-4xl font-bold text-green-400 mb-8"
            >
              # Get In Touch
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-cyan-400 mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base"
            >
              <span className="text-yellow-400">echo</span> "I'm always open to discussing new projects, creative ideas, or opportunities to collaborate."
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mb-12">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="bg-gray-800 border border-green-500/30 rounded-lg p-4 hover:border-green-500 transition-all group flex items-center gap-4"
                  >
                    <div className="p-2 bg-green-500/10 rounded group-hover:bg-green-500/20 transition-colors">
                      <Icon className="text-green-400" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-yellow-400 mb-1">{contact.label}:</h3>
                      <p className="text-cyan-400 text-sm truncate">{contact.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-green-600 text-black rounded font-semibold hover:bg-green-500 transition-colors"
              >
                [DOWNLOAD RESUME]
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
