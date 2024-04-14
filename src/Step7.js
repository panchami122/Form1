import { useEffect } from "react";
import Circle from "./circle-regular.svg";

const Step7 = ({ nextStep }) => {
 
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        nextStep();
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextStep]); // Ensure useEffect runs only when nextStep changes

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={Circle} alt="circle" className="w-20 h-auto" />
      <p className="text-black text-center mt-5 text-lg font-semibold">
        Finding learning path recommendations for you based on your responses.
      </p>
    </div>
  );
};

export default Step7;
