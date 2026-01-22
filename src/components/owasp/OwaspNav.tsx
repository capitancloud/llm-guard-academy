import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { owaspVulnerabilities } from '@/data/owaspVulnerabilities';

interface OwaspNavProps {
  activeId: string;
  onSelect: (id: string) => void;
}

const OwaspNav = ({ activeId, onSelect }: OwaspNavProps) => {
  const getColorClass = (color: string, isActive: boolean) => {
    if (!isActive) return 'text-muted-foreground';
    switch (color) {
      case 'cyber': return 'text-cyber';
      case 'warning': return 'text-warning';
      case 'danger': return 'text-destructive';
      case 'success': return 'text-success';
      case 'accent': return 'text-accent';
      default: return 'text-cyber';
    }
  };

  const getBorderClass = (color: string, isActive: boolean) => {
    if (!isActive) return 'border-transparent';
    switch (color) {
      case 'cyber': return 'border-cyber';
      case 'warning': return 'border-warning';
      case 'danger': return 'border-destructive';
      case 'success': return 'border-success';
      case 'accent': return 'border-accent';
      default: return 'border-cyber';
    }
  };

  const getBgClass = (color: string, isActive: boolean) => {
    if (!isActive) return 'bg-transparent hover:bg-secondary/50';
    switch (color) {
      case 'cyber': return 'bg-cyber/10';
      case 'warning': return 'bg-warning/10';
      case 'danger': return 'bg-destructive/10';
      case 'success': return 'bg-success/10';
      case 'accent': return 'bg-accent/10';
      default: return 'bg-cyber/10';
    }
  };

  return (
    <nav className="sticky top-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border p-4">
      <h3 className="text-sm font-medium text-muted-foreground mb-4 px-2">
        Vulnerabilità
      </h3>
      <ul className="space-y-1">
        {owaspVulnerabilities.map((vuln, index) => {
          const Icon = vuln.icon;
          const isActive = activeId === vuln.id;
          
          return (
            <motion.li
              key={vuln.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => onSelect(vuln.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border-l-2 transition-all duration-200',
                  getBgClass(vuln.color, isActive),
                  getBorderClass(vuln.color, isActive)
                )}
              >
                <span className={cn(
                  'font-mono text-xs font-bold',
                  getColorClass(vuln.color, isActive)
                )}>
                  {vuln.number}
                </span>
                <Icon className={cn(
                  'w-4 h-4 flex-shrink-0',
                  getColorClass(vuln.color, isActive)
                )} />
                <span className={cn(
                  'text-sm truncate transition-colors',
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
                )}>
                  {vuln.shortTitle}
                </span>
              </button>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default OwaspNav;
