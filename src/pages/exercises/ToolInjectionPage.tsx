import { useNavigate } from "react-router-dom";
import { ToolInjectionExercise } from "@/components/exercise/toolinjection/ToolInjectionExercise";

export default function ToolInjectionPage() {
  const navigate = useNavigate();

  return (
    <ToolInjectionExercise
      onComplete={() => navigate("/")}
      onBack={() => navigate("/")}
    />
  );
}
