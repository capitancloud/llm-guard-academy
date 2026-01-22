import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OwaspHero from '@/components/owasp/OwaspHero';
import OwaspNav from '@/components/owasp/OwaspNav';
import VulnerabilitySection from '@/components/owasp/VulnerabilitySection';
import { owaspVulnerabilities } from '@/data/owaspVulnerabilities';

interface OwaspTop10Props {
  onBack: () => void;
}

const OwaspTop10 = ({ onBack }: OwaspTop10Props) => {
  const [activeId, setActiveId] = useState(owaspVulnerabilities[0].id);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = owaspVulnerabilities.map(v => ({
        id: v.id,
        element: document.getElementById(v.id)
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveId(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavSelect = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <OwaspHero onBack={onBack} />

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-4">
              <OwaspNav activeId={activeId} onSelect={handleNavSelect} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-8">
            {owaspVulnerabilities.map((vuln, index) => (
              <motion.div
                key={vuln.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <VulnerabilitySection
                  vulnerability={vuln}
                  isActive={activeId === vuln.id}
                />
              </motion.div>
            ))}

            {/* Footer CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-cyber/10 to-accent/10 rounded-2xl border border-cyber/30 p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Pronto a mettere in pratica?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Torna alla dashboard e prova gli esercizi interattivi per comprendere
                meglio queste vulnerabilità attraverso simulazioni guidate.
              </p>
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyber text-primary-foreground rounded-lg font-medium hover:bg-cyber-glow transition-colors"
              >
                Vai agli Esercizi
              </button>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OwaspTop10;
