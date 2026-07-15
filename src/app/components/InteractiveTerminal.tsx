import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface TerminalLine {
  id: number;
  type: 'prompt' | 'output' | 'error' | 'banner' | 'blank';
  content: string;
  color?: string;
}

const BANNER = `
 ██████╗ ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
                         SOURAV TIWARI — v1.0.0
`.trim();

const COMMANDS: Record<string, { lines: { text: string; color: string }[] }> = {
  help: {
    lines: [
      { text: '┌─────────────────────────────────────────┐', color: 'text-green-500' },
      { text: '│           AVAILABLE COMMANDS            │', color: 'text-green-400' },
      { text: '├─────────────────────────────────────────┤', color: 'text-green-500' },
      { text: '│  whoami       → about me                │', color: 'text-cyan-400' },
      { text: '│  education    → academic background     │', color: 'text-cyan-400' },
      { text: '│  skills       → technical skills        │', color: 'text-cyan-400' },
      { text: '│  projects     → featured projects       │', color: 'text-cyan-400' },
      { text: '│  achievements → certifications          │', color: 'text-cyan-400' },
      { text: '│  internship   → work experience         │', color: 'text-cyan-400' },
      { text: '│  contact      → get in touch            │', color: 'text-cyan-400' },
      { text: '│  ls           → list all sections       │', color: 'text-cyan-400' },
      { text: '│  cd <section> → navigate to section     │', color: 'text-cyan-400' },
      { text: '│  clear        → clear terminal          │', color: 'text-cyan-400' },
      { text: '│  joke         → random dev joke         │', color: 'text-cyan-400' },
      { text: '└─────────────────────────────────────────┘', color: 'text-green-500' },
    ],
  },
  ls: {
    lines: [
      { text: 'drwxr-xr-x  whoami/', color: 'text-blue-400' },
      { text: 'drwxr-xr-x  education/', color: 'text-blue-400' },
      { text: 'drwxr-xr-x  skills/', color: 'text-blue-400' },
      { text: 'drwxr-xr-x  projects/', color: 'text-blue-400' },
      { text: 'drwxr-xr-x  achievements/', color: 'text-blue-400' },
      { text: 'drwxr-xr-x  internship/', color: 'text-blue-400' },
      { text: '-rw-r--r--  contact.sh', color: 'text-green-400' },
    ],
  },
  whoami: {
    lines: [
      { text: '╔══════════════════════════════════════════╗', color: 'text-yellow-500' },
      { text: '║           SOURAV TIWARI                  ║', color: 'text-yellow-400' },
      { text: '╠══════════════════════════════════════════╣', color: 'text-yellow-500' },
      { text: '║ Role     : Full Stack & AI/ML Developer  ║', color: 'text-white' },
      { text: '║ College  : SIRT, Bhopal                  ║', color: 'text-white' },
      { text: '║ Degree   : B.Tech CSE & IT               ║', color: 'text-white' },
      { text: '║ Year     : 2023 – 2027                   ║', color: 'text-white' },
      { text: '║ CPI      : 8.13 / 10.00                  ║', color: 'text-green-400' },
      { text: '║ Location : Bhopal, Madhya Pradesh        ║', color: 'text-white' },
      { text: '║ Status   : SIH 2025 Finalist · MLSA      ║', color: 'text-cyan-400' },
      { text: '╚══════════════════════════════════════════╝', color: 'text-yellow-500' },
    ],
  },
  education: {
    lines: [
      { text: '📚 EDUCATION', color: 'text-yellow-400' },
      { text: '─────────────────────────────────────', color: 'text-gray-600' },
      { text: '🎓 B.Tech – CSE & IT  [2023–2027]', color: 'text-green-400' },
      { text: '   Sagar Institute of Research & Technology, Bhopal', color: 'text-cyan-400' },
      { text: '   CPI: 8.13 / 10.00 | DSA · OOP · DBMS · OS', color: 'text-white' },
      { text: '', color: '' },
      { text: '📝 Intermediate (PCM) [2021–2023]', color: 'text-green-400' },
      { text: '   Govt. Model Co-Ed Sr. Sec. School, Punjab | 88.4%', color: 'text-white' },
      { text: '', color: '' },
      { text: '📝 Matriculation [2019–2021]', color: 'text-green-400' },
      { text: '   St. Pius Convent Sr. Sec. School, Punjab | 96.99%', color: 'text-white' },
    ],
  },
  skills: {
    lines: [
      { text: '⚡ TECHNICAL SKILLS', color: 'text-yellow-400' },
      { text: '─────────────────────────────────────', color: 'text-gray-600' },
      { text: '  Languages   →  Java  C  C++  Python  SQL', color: 'text-cyan-400' },
      { text: '  Development →  HTML  CSS  JavaScript  Node.js  Express.js  RESTful API  JWT', color: 'text-cyan-400' },
      { text: '  ML & AI     →  Machine Learning  LLM Integration  Ollama  Prompt Engineering', color: 'text-purple-400' },
      { text: '               →  AI Agents  Google Gemini AI', color: 'text-purple-400' },
      { text: '  Databases   →  MySQL  PostgreSQL  MongoDB  DB Design  Query Optimization', color: 'text-cyan-400' },
      { text: '  Tools       →  Git  GitHub  Postman  n8n  AWS  Google Cloud  Linux  Vercel  Render', color: 'text-cyan-400' },
      { text: '  Core        →  DSA  OOP  DBMS  OS  Networks  SDLC  Agile/Scrum  Software Testing', color: 'text-gray-400' },
    ],
  },
  projects: {
    lines: [
      { text: '🚀 FEATURED PROJECTS', color: 'text-yellow-400' },
      { text: '─────────────────────────────────────', color: 'text-gray-600' },
      { text: '[1] Hospital Management System  [Anveshana 2025]', color: 'text-green-400' },
      { text: '    Stack : Node.js · Express.js · React · MongoDB · TypeScript · JWT', color: 'text-cyan-400' },
      { text: '    → Manages 100+ hospital records, ~30% improved data access efficiency', color: 'text-gray-300' },
      { text: '', color: '' },
      { text: '[2] AI/ML Crypto Primitive Identification  [SIH 2025]', color: 'text-green-400' },
      { text: '    Stack : Python · PyTorch · NumPy · NetworkX · Flask', color: 'text-cyan-400' },
      { text: '    → ~40% reduction in manual firmware analysis effort', color: 'text-gray-300' },
      { text: '', color: '' },
      { text: '[3] CertifiProof – AI Certificate Validator  [Sageathon 2026]', color: 'text-green-400' },
      { text: '    Stack : Python · EfficientNet-B4 · Tesseract OCR · Ollama · Flask', color: 'text-cyan-400' },
      { text: '    → ELA forensic + GradCAM, fuzzy-matched 50 universities (NAAC)', color: 'text-gray-300' },
      { text: '', color: '' },
      { text: '[4] Terminal-Based CLI Tool', color: 'text-green-400' },
      { text: '    Stack : Bash · Python · Shell Scripting', color: 'text-cyan-400' },
    ],
  },
  achievements: {
    lines: [
      { text: '🏆 ACHIEVEMENTS & CERTIFICATIONS', color: 'text-yellow-400' },
      { text: '─────────────────────────────────────', color: 'text-gray-600' },
      { text: '  [2026] 🥉 SolveExpo 2026 — 3rd Runner-Up', color: 'text-orange-400' },
      { text: '         Presented innovative web project to 50+ judges', color: 'text-gray-300' },
      { text: '  [2026] 📜 NPTEL – Intro to Machine Learning (57%)', color: 'text-cyan-400' },
      { text: '  [2025] 🥇 SIH 2025 Finalist — top teams out of 10,000+ entries', color: 'text-yellow-400' },
      { text: '  [2025] 🥈 YUKTI 2025 & Anveshana 2025 — Semifinalist', color: 'text-orange-400' },
      { text: '  [2025] 🎖  Microsoft Learn Student Ambassador', color: 'text-blue-400' },
      { text: '         100+ learners, 5+ workshops on web dev & cloud', color: 'text-gray-300' },
      { text: '  [2025] ☁️  Google Cloud Arcade — 10+ labs, multiple GCP badges', color: 'text-cyan-400' },
      { text: '  [2025] 📜 NPTEL – Programming in Java (68%)', color: 'text-cyan-400' },
      { text: '  [2024] 📄 Research Publication — IJAR (ISSN:2455-6211)', color: 'text-purple-400' },
    ],
  },
  internship: {
    lines: [
      { text: '💼 WORK EXPERIENCE', color: 'text-yellow-400' },
      { text: '─────────────────────────────────────', color: 'text-gray-600' },
      { text: '  Full Stack Development Intern @ Coding Arena', color: 'text-green-400' },
      { text: '  Jul 2026 – Present', color: 'text-gray-400' },
      { text: '  → Built full-stack apps: React.js · Node.js · Express.js · MongoDB', color: 'text-gray-300' },
      { text: '  → RESTful APIs · JWT auth · CRUD · Agile sprints · Git', color: 'text-gray-300' },
      { text: '', color: '' },
      { text: '  ML & Backend Developer Intern @ Coding Arena', color: 'text-green-400' },
      { text: '  Mar 2026 – Jun 2026', color: 'text-gray-400' },
      { text: '  → Architected 15+ REST API endpoints, reduced response time by 25%', color: 'text-gray-300' },
      { text: '  → ML models in Python: +20% accuracy across 5 pipelines', color: 'text-gray-300' },
      { text: '  → Automated data workflows saving 8 hrs/week', color: 'text-gray-300' },
    ],
  },
  contact: {
    lines: [
      { text: '📬 CONTACT INFORMATION', color: 'text-yellow-400' },
      { text: '─────────────────────────────────────', color: 'text-gray-600' },
      { text: '  📞 Phone    : 7719710557', color: 'text-white' },
      { text: '  📧 Email    : sourav688tiwari@gmail.com', color: 'text-white' },
      { text: '  💼 LinkedIn : linkedin.com/in/sourav-tiwari-328bb1277', color: 'text-blue-400' },
      { text: '  🐙 GitHub   : github.com/saurav688', color: 'text-white' },
      { text: '  💻 LeetCode : leetcode.com/u/Saurav_688', color: 'text-orange-400' },
      { text: '  🌐 Portfolio: sourav-portfolio-9utk.onrender.com', color: 'text-purple-400' },
    ],
  },
  joke: {
    lines: [
      { text: '😄 DEV JOKE', color: 'text-yellow-400' },
      { text: '─────────────────────────────────────', color: 'text-gray-600' },
      { text: 'Q: Why do programmers prefer dark mode?', color: 'text-white' },
      { text: 'A: Because light attracts bugs! 🐛', color: 'text-green-400' },
    ],
  },
};

let lineId = 0;
const nextId = () => ++lineId;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function InteractiveTerminal({ isOpen, onClose }: Props) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initTerminal = useCallback(() => {
    setLines([
      { id: nextId(), type: 'banner', content: BANNER, color: 'text-green-400' },
      { id: nextId(), type: 'output', content: 'Welcome to Sourav\'s Terminal Portfolio', color: 'text-cyan-400' },
      { id: nextId(), type: 'output', content: 'Type "help" to see available commands.', color: 'text-gray-400' },
      { id: nextId(), type: 'blank', content: '' },
    ]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      initTerminal();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, initTerminal]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const typeLines = useCallback(async (newLines: TerminalLine[], outputLines: { text: string; color: string }[]) => {
    setIsTyping(true);
    let current = [...newLines];
    for (const line of outputLines) {
      current = [...current, { id: nextId(), type: 'output', content: line.text, color: line.color || 'text-gray-300' }];
      setLines([...current]);
      await new Promise((r) => setTimeout(r, 18));
    }
    current = [...current, { id: nextId(), type: 'blank', content: '' }];
    setLines([...current]);
    setIsTyping(false);
  }, []);

  const handleCommand = useCallback(async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    const withPrompt: TerminalLine[] = [
      ...lines,
      { id: nextId(), type: 'prompt', content: cmd, color: 'text-green-400' },
    ];

    if (trimmed === 'clear') {
      initTerminal();
      return;
    }

    if (trimmed === '') {
      setLines([...withPrompt, { id: nextId(), type: 'blank', content: '' }]);
      return;
    }

    // Navigation commands — cd <section> or goto <section>
    const navMatch = trimmed.match(/^(?:cd|goto|go)\s+(\w+)$/);
    const sectionMap: Record<string, string> = {
      home: '#home', about: '#about', skills: '#skills',
      projects: '#projects', achievements: '#achievements', contact: '#contact',
    };
    if (navMatch && sectionMap[navMatch[1]]) {
      const target = sectionMap[navMatch[1]];
      setLines([
        ...withPrompt,
        { id: nextId(), type: 'output', content: `→ Navigating to ${navMatch[1]}...`, color: 'text-green-400' },
        { id: nextId(), type: 'blank', content: '' },
      ]);
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }, 400);
      return;
    }

    const command = COMMANDS[trimmed];
    if (command) {
      await typeLines(withPrompt, command.lines);
    } else {
      setLines([
        ...withPrompt,
        { id: nextId(), type: 'error', content: `bash: ${trimmed}: command not found. Try "help"`, color: 'text-red-400' },
        { id: nextId(), type: 'blank', content: '' },
      ]);
    }
  }, [lines, initTerminal, typeLines, onClose]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isTyping) {
      handleCommand(input);
      if (input.trim()) setHistory((prev) => [input, ...prev]);
      setHistoryIndex(-1);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(idx);
      setInput(history[idx] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(historyIndex - 1, -1);
      setHistoryIndex(idx);
      setInput(idx === -1 ? '' : history[idx]);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const cmds = Object.keys(COMMANDS);
      const match = cmds.find((c) => c.startsWith(input));
      if (match) setInput(match);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="w-full max-w-4xl h-[92vh] sm:h-[85vh] flex flex-col rounded-lg sm:rounded-xl overflow-hidden"
            style={{ boxShadow: '0 0 60px rgba(34,197,94,0.15), 0 0 0 1px rgba(34,197,94,0.2)' }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-green-500/20 flex-shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
                >
                  <X size={8} className="opacity-0 group-hover:opacity-100 text-red-900" />
                </button>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-gray-400 text-xs font-mono">sourav@portfolio — bash</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-300 transition-colors text-xs font-mono"
              >
                [esc]
              </button>
            </div>

            {/* Scanline effect + output */}
            <div
              className="flex-1 overflow-y-auto bg-[#0a0f0a] p-3 sm:p-4 font-mono text-xs sm:text-sm cursor-text relative"
              onClick={() => inputRef.current?.focus()}
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
              }}
            >
              {lines.map((line) => (
                <motion.div
                  key={line.id}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.08 }}
                  className={`leading-relaxed ${
                    line.type === 'banner'
                      ? 'text-green-400 text-[10px] sm:text-xs whitespace-pre mb-3 leading-tight'
                      : line.type === 'prompt'
                      ? 'text-green-400'
                      : line.type === 'error'
                      ? 'text-red-400'
                      : line.type === 'blank'
                      ? 'h-2'
                      : line.color || 'text-gray-300'
                  }`}
                >
                  {line.type === 'prompt' && (
                    <span>
                      <span className="text-green-500">sourav</span>
                      <span className="text-gray-500">@</span>
                      <span className="text-cyan-400">portfolio</span>
                      <span className="text-gray-500">:~$ </span>
                      <span className="text-white">{line.content}</span>
                    </span>
                  )}
                  {line.type === 'banner' && line.content}
                  {(line.type === 'output' || line.type === 'error') && (
                    <span className={line.color}>{line.content}</span>
                  )}
                  {line.type === 'blank' && null}
                </motion.div>
              ))}

              {/* Active input line */}
              <div className="flex items-center gap-0 text-sm mt-1">
                <span className="text-green-500 font-mono">sourav</span>
                <span className="text-gray-500 font-mono">@</span>
                <span className="text-cyan-400 font-mono">portfolio</span>
                <span className="text-gray-500 font-mono">:~$ </span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isTyping}
                  className="flex-1 bg-transparent outline-none text-white caret-green-400 font-mono ml-0"
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                />
                {isTyping && (
                  <span className="text-green-400 animate-pulse text-xs ml-2">processing...</span>
                )}
              </div>
              <div ref={bottomRef} />
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-green-500/10 border-t border-green-500/20 flex-shrink-0">
              <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                <span className="text-green-400">● CONNECTED</span>
                <span>TAB: autocomplete</span>
                <span>↑↓: history</span>
              </div>
              <span className="text-xs font-mono text-gray-600">type "help" for commands</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
