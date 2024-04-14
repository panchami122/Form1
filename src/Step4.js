
import React,{useState} from "react";
import math from './math.png';
import  ScienceNEngineering from './scienceNengineering.png';
import CSnProg from './CSnProg.png';
import DataAnalysis from './dataAnalytics.png'


const Step4 = ({ nextStep }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const isContinueEnabled = selectedButton !== null; 

  const handleSubmit = (e) => {
    e.preventDefault();
   
    nextStep();
  };




  return (
    <div className="p-5 mt-2 flex justify-center min-h-screen">
      <form onSubmit={nextStep} className="flex flex-col space-y-4 w-full md:w-[60%] lg:w-[50%] xl:w-[45%] rounded-lg">
 
        <div>
          <p className="text-black font-bold mb-5 md:text-[30px] text-center text-2xl font-['Soleil', Arial, sans-serif]">
            Which topic do you want to explore?
          </p>
          <p className="text-black text-center mb-5 text-[16px] font-['Soleil', Arial, sans-serif]">
           Choose one for now - you can always adjust this later
          </p>
        </div>
        <div className="Buttoncard-options flex flex-col justify-start">

        <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'math' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('math')}
          >
            <img src={math} alt="math" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
             Math
            </p>
          </button>


          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'ScienceNEngineering' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('ScienceNEngineering')}
          >
            <img src={ScienceNEngineering} alt="ScienceNEngineering" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              Science & Engineering
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'CSnProg' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('CSnProg')}
          >
            <img src={CSnProg} alt="CSnProg" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              Computer Science & Programming
            </p>
          </button>

          

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'DataAnalysis' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('DataAnalysis')}
          >
            <img src={DataAnalysis} alt="DataAnalysis" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              Data Analysis & Probability.
            </p>
          </button>

                    
        </div>
        
        <div className="flex justify-center">
        <button type="submit" onClick={handleSubmit} className={`bg-black text-white rounded-md p-3 px-16 w-fit ${
              isContinueEnabled ? '' : 'bg-gray-400 cursor-not-allowed' 
            }`}  disabled={!isContinueEnabled} >Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Step4;
