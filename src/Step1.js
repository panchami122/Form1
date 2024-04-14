// Step1.js
import React,{useState} from "react";
import Student from './student.png';
import Professional from './professional.png';
import Parent from './parent.png';
import  LifelongLearner from './lifelong.png';
import Teacher from './teacher.png';
import Other from './other.png'


const Step1 = ({ nextStep }) => {
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
            Which describes you best?
          </p>
          <p className="text-gray-500 text-center mb-5 text-[16px] font-['Soleil', Arial, sans-serif]">
            This will help us personalize your experience.
          </p>
        </div>
        <div className="Buttoncard-options flex flex-col justify-start">
          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'student' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('student')}
          >
            <img src={Student} alt="Student" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              <span className="text-slate-700">Student</span> or soon to be enrolled
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'professional' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('professional')}
          >
            <img src={Professional} alt="Professional" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              <span className="text-slate-700">Professional</span> pursuing a career
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'parent' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('parent')}
          >
            <img src={Parent} alt="Parent" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              <span className="text-slate-700">Parent</span> of a school-age child
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'LifelongLearner' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('LifelongLearner')}
          >
            <img src={LifelongLearner} alt="LifelongLearner" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              <span className="text-slate-700">LifelongLearner</span> 
            </p>
          </button>

          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'Teacher' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('Teacher')}
          >
            <img src={Teacher} alt="Teacher" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              <span className="text-slate-700">Teacher</span> 
            </p>
          </button>           
          <button
            type="button"
            className={`buttoncard-opt mb-3 p-[16px 24px] text-[16px] text-gray-500 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-row justify-start items-center min-h-[64px] gap-2 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === 'other' ? 'border-orange-400 shadow-md' : ''
            }`}
            onClick={() => handleClick('other')}
          >
            <img src={Other} alt="Other" className="p-3 pl-2 ml-3 w-[50px] h-auto" />
            <p>
              <span className="text-slate-700">Other</span> 
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

export default Step1;
