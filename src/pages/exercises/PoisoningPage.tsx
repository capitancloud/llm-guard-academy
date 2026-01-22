import { useNavigate } from "react-router-dom";
import { PoisoningExercise } from "@/components/exercise/poisoning/PoisoningExercise";

const PoisoningPage = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <PoisoningExercise
      onComplete={handleComplete}
      onBack={handleBack}
    />
  );
};

export default PoisoningPage;
