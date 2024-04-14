import cheerLeader from "./cheerleader.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Step6 = ({ nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    nextStep();
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-5 justify-center items-center sm:flex-col lg:w-[70%] lg:m-10 lg:pr-10 lg:mb-4">
        <div className="flex flex-col items-center justify-center mt-[8%] md:flex-row">
          <div className="w-[65%] md:w-[82%] lg:w-[40%] ml-11 md:mb-3">
            <video src={cheerLeader} autoPlay loop muted className="w-full" />
          </div>
          <div className="w-auto md:text-left lg:items-center lg:justify-start lg:w-[55%] lg:pb-12 ml-13 md:ml-8 mt-6  lg:ml-16">
            <p className="text-black font-bold mb-5 md:text-[30px]  text-2xl font-['Soleil', Arial, sans-serif]">
              You're on your way!{" "}
            </p>
            <div className="flex flex-row mb-5">
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
            </div>

            <p className="text-black text-left mb-5 text-[16px] font-['Soleil', Arial, sans-serif] italic">
              "Through its engaging and well-structured courses, Brilliant has
              taught me mathematical concepts that i previously struggled to
              understand. I now feel confident approaching both technical job
              interviews and real world problem solving situations."
            </p>
            <p className="text-black text-left mb-5 text-[16px] font-['Soleil', Arial, sans-serif] italic">
              -Jacob S.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className={`bg-black text-white rounded-md p-3 px-16 w-fit`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step6;
