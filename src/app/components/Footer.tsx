import { Heart, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-green-500/20 text-white py-8 relative z-10 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-green-400">
            <Terminal size={16} />
            <p className="text-gray-400 text-center flex items-center gap-2">
              <span className="text-yellow-400">~$</span> Made with <Heart size={14} className="text-red-500 fill-red-500" /> by <span className="text-green-400">Sourav Tiwari</span>
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} <span className="text-cyan-400">sourav@portfolio</span> - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}