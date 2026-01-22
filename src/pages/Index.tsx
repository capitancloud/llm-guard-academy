import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { PromptInjectionExercise } from "@/components/exercise/PromptInjectionExercise";
import { JailbreakExercise } from "@/components/exercise/jailbreak/JailbreakExercise";
import { SmugglingExercise } from "@/components/exercise/smuggling/SmugglingExercise";
import OwaspTop10 from "@/pages/OwaspTop10";
import type { Exercise } from "@/data/exercises";

type View = "dashboard" | "exercise" | "owasp";

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const handleSelectExercise = (exercise: Exercise) => {
    if (exercise.available) {
      setSelectedExercise(exercise);
      setCurrentView("exercise");
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedExercise(null);
  };

  const handleNavigateOwasp = () => {
    setCurrentView("owasp");
  };

  if (currentView === "owasp") {
    return <OwaspTop10 onBack={handleBackToDashboard} />;
  }

  if (currentView === "exercise" && selectedExercise) {
    // Route to the correct exercise based on slug
    if (selectedExercise.slug === "prompt-injection") {
      return (
        <PromptInjectionExercise
          onComplete={handleBackToDashboard}
          onBack={handleBackToDashboard}
        />
      );
    }
    
    if (selectedExercise.slug === "jailbreak-ruolo") {
      return (
        <JailbreakExercise
          onComplete={handleBackToDashboard}
          onBack={handleBackToDashboard}
        />
      );
    }

    if (selectedExercise.slug === "prompt-smuggling") {
      return (
        <SmugglingExercise
          onComplete={handleBackToDashboard}
          onBack={handleBackToDashboard}
        />
      );
    }
  }

  return (
    <Dashboard 
      onSelectExercise={handleSelectExercise} 
      onNavigateOwasp={handleNavigateOwasp}
    />
  );
};

export default Index;
