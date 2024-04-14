// Step2.js
import React,{useState} from "react";
import Specificskills from './learningspeskill.png';
import newTopics from './newtopics.png';
import math from './math.png';
import  brain from './brain.png';
import school from './school.png';
import SomethingElse from './somethingelse.png'


const Step2 = ({ nextStep }) => {
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
            Which are you most interested in?
          </p>
          <p className="text-gray-500 text-center mb-5 text-[16px] font-['Soleil', Arial, sans-serif]">
           Choose just one. This will help us get you started (but won't limit your experience).
          </p>
        </div>
        <div className="Buttoncard-options flex flex-col justify-start">
          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'Specificskills' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('Specificskills')}
          >
            <img src={Specificskills} alt="Specificskills" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              Learning specific skills to advance my career
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'newTopics' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('newTopics')}
          >
            <img src={newTopics} alt="newTopics" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              Exploring new topics I'm interested in
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'math' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('math')}
          >
            <img src={math} alt="math" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
             Refreshing my math foundations
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'brain' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('brain')}
          >
            <img src={brain} alt="brain" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              Exercising my brain to stay sharp
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'school' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('school')}
          >
            <img src={school} alt="school" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              Excelling in school
            </p>
          </button>           
          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'SomethingElse' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('SomethingElse')}
          >
            <img src={SomethingElse} alt="SomethingElse" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              Something else
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

export default Step2;
