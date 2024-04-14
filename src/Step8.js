import React, { useState } from "react";
import mathFoundation from "./mathfoundation.png";

const Step8 = ({ nextStep }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="p-5 m-6 flex flex-row justify-center items-center min-h-screen">
      <form
        onSubmit={nextStep}
        className="flex flex-col items-center w-full rounded-lg"
      >
        <div className="mb-10">
          <p className="text-black font-bold mb-5 md:text-[30px] text-center text-2xl font-['Soleil', Arial, sans-serif]">
            Learning path based on your answers.
          </p>
          <p className="text-gray-500 text-center mb-5 text-[16px] font-['Soleil', Arial, sans-serif]">
            Choose one to get started.you can switch anytime.
          </p>
        </div>

        <div className="Buttoncard-options flex flex-col lg:flex-row md:flex-wrap lg:flex-wrap lg:justify-center w-full">
          <button
            type="button"
            className={`buttoncard-opt p-[8px] lg:mx-2 lg:w-[400px] md:w-[400px] w-full mx-auto my-3 lg:my-0 text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-col lg:flex-row justify-between items-center gap-4 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === "MathFoundation"
                ? "border-orange-400 shadow-md"
                : ""
            }`}
            onClick={() => handleClick("MathFoundation")}
          >
            <div className="flex flex-col justify-start items-start order-2 lg:order-1">
              <p className="pb-2 pl-2 text-left">
                <span className="text-slate-800 font-semibold">
                  Foundational math
                </span>
                <br />
                Build your foundational skills in algebra, geometry, and
                probability.
              </p>
            </div>
            <img
              src={mathFoundation}
              alt="MathFoundation"
              className="p-5 lg:w-[150px] h-auto order-1 lg:order-2"
            />
          </button>

          <button
            type="button"
            className={`buttoncard-opt p-[8px] lg:mx-2 lg:w-[400px] md:w-[400px] w-full mx-auto my-3 lg:my-0 text-[16px] text-gray-700 font-['Soleil', Arial, sans-serif] rounded-[6px] border border-gray-200 border-solid-[0.5px] flex flex-col lg:flex-row justify-between items-center gap-4 hover:transform hover:scale-105 transition duration-100 ease-in-out cursor-pointer ${
              selectedButton === "MathematicalThinking"
                ? "border-orange-400 shadow-md"
                : ""
            }`}
            onClick={() => handleClick("MathematicalThinking")}
          >
            <div className="flex flex-col justify-start items-start order-2 lg:order-1">
              <p className="pb-2 pl-2 text-left">
                <span className="text-slate-800 font-semibold">
                  Mathematical Thinking
                </span>
                <br />
                Build your foundational skills in algebra, geometry, and
                probability.
              </p>
            </div>
            <img
              src={mathFoundation}
              alt="MathFoundation"
              className="p-5 lg:w-[150px] h-auto order-1 lg:order-2"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step8;
