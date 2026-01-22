import { 
  Syringe, 
  Drama, 
  EyeOff, 
  MessageSquareWarning, 
  Biohazard, 
  Brain, 
  Wrench, 
  ShieldAlert, 
  UserCog, 
  Bomb,
  LucideIcon
} from "lucide-react";

export interface Exercise {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  available: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const exercises: Exercise[] = [
  {
    id: 1,
    slug: "prompt-injection",
    title: "Prompt Injection",
    subtitle: "Quando l'istruzione nascosta prende il controllo",
    description: "Scopri come un input malevolo può sovrascrivere le istruzioni di sistema e alterare il comportamento del modello.",
    icon: Syringe,
    available: true,
    difficulty: 'beginner',
  },
  {
    id: 2,
    slug: "jailbreak-ruolo",
    title: "Jailbreak di Ruolo",
    subtitle: "Convincere l'LLM a diventare qualcun altro",
    description: "Esplora come un attaccante può manipolare il modello per assumere identità non autorizzate.",
    icon: Drama,
    available: true,
    difficulty: 'beginner',
  },
  {
    id: 3,
    slug: "prompt-smuggling",
    title: "Prompt Smuggling",
    subtitle: "Nascondere comandi dove il modello non guarda",
    description: "Impara come istruzioni nascoste possono essere inserite in contesti apparentemente innocui.",
    icon: EyeOff,
    available: false,
    difficulty: 'intermediate',
  },
  {
    id: 4,
    slug: "system-prompt-leakage",
    title: "System Prompt Leakage",
    subtitle: "Far parlare l'LLM di ciò che non dovrebbe dire",
    description: "Comprendi come un modello può essere indotto a rivelare le sue istruzioni segrete.",
    icon: MessageSquareWarning,
    available: false,
    difficulty: 'intermediate',
  },
  {
    id: 5,
    slug: "context-poisoning",
    title: "Context Poisoning",
    subtitle: "Avvelenare il contesto passo dopo passo",
    description: "Esplora come manipolare gradualmente il contesto di una conversazione per ottenere output dannosi.",
    icon: Biohazard,
    available: false,
    difficulty: 'intermediate',
  },
  {
    id: 6,
    slug: "chain-of-thought-extraction",
    title: "Chain-of-Thought Extraction",
    subtitle: "Ottenere il ragionamento interno del modello",
    description: "Scopri tecniche per far rivelare al modello il suo processo di ragionamento nascosto.",
    icon: Brain,
    available: false,
    difficulty: 'advanced',
  },
  {
    id: 7,
    slug: "tool-injection",
    title: "Tool Injection",
    subtitle: "Usare le funzioni dell'LLM contro se stesso",
    description: "Comprendi come le chiamate a funzioni esterne possono essere manipolate per scopi malevoli.",
    icon: Wrench,
    available: false,
    difficulty: 'advanced',
  },
  {
    id: 8,
    slug: "over-trust-attack",
    title: "Over-Trust Attack",
    subtitle: "Quando l'LLM viene indotto a decidere al posto tuo",
    description: "Esplora i rischi dell'eccessiva fiducia nelle decisioni automatiche del modello.",
    icon: ShieldAlert,
    available: false,
    difficulty: 'advanced',
  },
  {
    id: 9,
    slug: "persona-hijacking",
    title: "Persona Hijacking",
    subtitle: "Riscrivere identità, tono e comportamento del modello",
    description: "Impara come un attaccante può alterare completamente la personalità dell'assistente.",
    icon: UserCog,
    available: false,
    difficulty: 'advanced',
  },
  {
    id: 10,
    slug: "attacco-combinato",
    title: "Attacco Combinato",
    subtitle: "Prompt Injection + Tool Abuse",
    description: "Affronta uno scenario realistico che combina multiple tecniche di attacco.",
    icon: Bomb,
    available: false,
    difficulty: 'advanced',
  },
];
