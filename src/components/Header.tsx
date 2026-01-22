import { motion } from "framer-motion";
import { Shield, Terminal, BookOpen } from "lucide-react";

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
  onNavigateOwasp?: () => void;
}

export function Header({ showBack, onBack, onNavigateOwasp }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground transition-colors mr-2"
            >
              ← Torna indietro
            </button>
          )}
          {!showBack && (
            <>
              <div className="relative">
                <Shield className="w-8 h-8 text-primary" />
                <Terminal className="w-4 h-4 text-primary absolute -bottom-1 -right-1" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">
                  LLM Security Lab
                </h1>
                <p className="text-xs text-muted-foreground">
                  Impara a proteggere i modelli AI
                </p>
              </div>
            </>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {!showBack && onNavigateOwasp && (
            <button
              onClick={onNavigateOwasp}
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-cyber hover:bg-cyber/10 rounded-lg transition-all duration-200"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">OWASP Top 10</span>
            </button>
          )}
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-terminal animate-pulse" />
            <span>Lab attivo</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
