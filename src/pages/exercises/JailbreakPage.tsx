import { useNavigate } from "react-router-dom";
import { JailbreakExercise } from "@/components/exercise/jailbreak/JailbreakExercise";

const JailbreakPage = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <JailbreakExercise
      onComplete={handleComplete}
      onBack={handleBack}
    />
  );
};

export default JailbreakPage;
