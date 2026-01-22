import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProgressIndicator } from "../ProgressIndicator";
import { Step1Scenario } from "./Step1Scenario";
import { Step2PromptVisual } from "./Step2PromptVisual";
import { Step3Simulation } from "./Step3Simulation";
import { Step4Feedback } from "./Step4Feedback";
import { Step5Comparison } from "./Step5Comparison";
import { Step6Debrief } from "./Step6Debrief";

const STEP_TITLES = [
  "Scenario",
  "Fasi",
  "Simulazione", 
  "Analisi",
  "Confronto",
  "Riepilogo"
];

export function CombinedAttackExercise() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <ProgressIndicator 
          currentStep={currentStep} 
          totalSteps={6} 
          stepTitles={STEP_TITLES}
        />

        <AnimatePresence mode="wait">
          {currentStep === 1 && <Step1Scenario key="step1" onNext={handleNext} />}
          {currentStep === 2 && <Step2PromptVisual key="step2" onNext={handleNext} />}
          {currentStep === 3 && <Step3Simulation key="step3" onNext={handleNext} />}
          {currentStep === 4 && <Step4Feedback key="step4" onNext={handleNext} />}
          {currentStep === 5 && <Step5Comparison key="step5" onNext={handleNext} />}
          {currentStep === 6 && <Step6Debrief key="step6" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
