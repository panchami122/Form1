import React from 'react';

const Header = ({ step, prevStep }) => {
  const progressBarWidth = `${(step - 1) * 20}%`; 
  
  const handleClick = () => {
    if (step > 1) {
      prevStep();
    }
  };
  
  return (
    <div className="w-full h-8 flex items-center justify-center relative">
      {step > 1 && (
        <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4 pr-0 cursor-pointer text-lg" onClick={handleClick}>
          &lt; 
        </div>
      )}
      <div className="w-11/12 bg-gray-200 rounded-full shadow-md h-2 relative">
        <div className="bg-teal-600 rounded-full h-full" style={{ width: progressBarWidth }}></div>
      </div>
    </div>
  );
};

export default Header;
