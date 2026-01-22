import { useNavigate } from "react-router-dom";
import OwaspTop10 from "./OwaspTop10";

const OwaspTop10Page = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <OwaspTop10 onBack={handleBack} />;
};

export default OwaspTop10Page;
