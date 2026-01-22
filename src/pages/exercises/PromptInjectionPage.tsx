import { useNavigate } from "react-router-dom";
import { PromptInjectionExercise } from "@/components/exercise/PromptInjectionExercise";

const PromptInjectionPage = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <PromptInjectionExercise
      onComplete={handleComplete}
      onBack={handleBack}
    />
  );
};

export default PromptInjectionPage;
