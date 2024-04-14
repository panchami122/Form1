
import React,{useState} from "react";
import Arithmetic from './arithmetic.png';
import  BasicAlgebra from './basicAlgebra.png';
import IntermediateAlgebra from './intermediateAlgebra.png';
import Calculus from './calculus.png'


const Step5 = ({ nextStep }) => {
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
    <div className="p-5 m-6 flex flex-row justify-center items-center min-h-screen">
      <form onSubmit={nextStep} className="flex flex-col items-center w-full rounded-lg">
        
        <div className="mb-10">
          <p className="text-black font-bold mb-5 md:text-[30px] text-center text-2xl font-['Soleil', Arial, sans-serif]">
             What is your math comfort level?
          </p>
          <p className="text-black text-center mb-5 text-[16px] font-['Soleil', Arial, sans-serif]">
           Choose the highest level you feel confident in - you can always adjust later.
          </p>
        </div>

        <div className="Buttoncard-options flex flex-col lg:flex-row md:flex-wrap lg:flex-wrap lg:justify-center w-full lg:w-fit">
          <button
            type="button"
            className={`buttoncard-opt p-[8px] lg:mx-2 lg:w-[200px]  lg:h-[166px] mx-auto my-3 lg:my-0 text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-col justify-center items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'Arithmetic' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('Arithmetic')}
          >
            <img src={Arithmetic} alt="Arithmetic" className="p-5 w-[120px] h-auto" />
            <p className=" pb-5 px-10 " >
              <span className="text-slate-700">Arithmetic</span>
               <p>Introductory</p>
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt p-[8px] lg:mx-2  lg:w-[200px] lg:h-[166px] mx-auto my-3 lg:my-0 lg:mb-10 text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-col  justify-center items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'BasicAlgebra' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('BasicAlgebra')}
          >
            <img src={BasicAlgebra} alt="BasicAlgebra" className="p-3 w-[170px] h-auto" />
            <p className=" pb-5 px-10 ">
              <span className="text-slate-700">Basic Algebra</span> 
              <p>Foundational</p>
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt p-[8px] lg:mx-2  lg:w-[200px] lg:h-[166px] mx-auto my-3 lg:my-0 text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-col justify-center items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'IntermediateAlgebra' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('IntermediateAlgebra')}
          >
            <img src={IntermediateAlgebra} alt="IntermediateAlgebra" className=" py-3 pb-6 w-[150px] h-auto" />
            <p className=" px-5">
              <span className="text-slate-700">Intermediate Algebra</span>
              <p> Intermediate </p>
            </p>
          </button>          

          <button
            type="button"
            className={`buttoncard-opt p-[8px] lg:mx-2  lg:w-[200px] lg:h-[166px] mx-auto my-3 lg:my-0 text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-col justify-center items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'calculus' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('calculus')}
          >
            <img src={Calculus} alt="calculus" className=" py-3 pt-6 w-[120px] h-auto" />
            <p className="pb-10 px-16 ">
              <span className="text-slate-700">Calculus</span>
               <p>Advanced</p>
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

export default Step5;
