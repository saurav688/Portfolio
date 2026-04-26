import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Minus, Square, X } from 'lucide-react';

interface TerminalWindowProps {
  children: ReactNode;
}

export function TerminalWindow({ children }: TerminalWindowProps) {
  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" aria-label="Close">
                <X className="w-2 h-2 text-red-900 mx-auto" />
              </button>
              <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" aria-label="Minimize">
                <Minus className="w-2 h-2 text-yellow-900 mx-auto" />
              </button>
              <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" aria-label="Maximize">
                <Square className="w-2 h-2 text-green-900 mx-auto" />
              </button>
            </div>
            <span className="ml-4 text-gray-400 text-sm font-mono">
              sourav@portfolio:~$
            </span>
          </div>
          <div className="text-gray-500 text-xs font-mono">
            bash
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-gray-900 text-green-400">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
