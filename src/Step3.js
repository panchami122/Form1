import Pulleyblob from "./pulley-blob.mp4";


const Step3 = ({ nextStep }) => {
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    nextStep();
  };
  

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-5 justify-center items-center sm:flex-col lg:w-[70%] lg:m-10 lg:pr-10 lg:mb-4">
        <div className="flex flex-col items-center justify-center mt-[8%] md:flex-row">
          <div className="w-[65%] md:w-[82%] lg:w-[40%] ml-11 md:mb-3">
            <video src={Pulleyblob} autoPlay loop muted className="w-full" />
          </div>
          <div className="w-auto md:text-left lg:items-center lg:justify-start lg:w-[55%] lg:pb-12 ml-13 md:ml-8 mt-6  lg:ml-16">
            <p className="text-black font-bold mb-5 md:text-[30px]  text-2xl font-['Soleil', Arial, sans-serif]">You're in the right place</p>
            <p className="text-black text-left mb-5 text-[16px] font-['Soleil', Arial, sans-serif]">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math,science, and computer science.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" onClick={handleSubmit} className={`bg-black text-white rounded-md p-3 px-16 w-fit`}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
