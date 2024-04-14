// MultiStepForm.js
import React, { useState } from 'react';
import Header from "./header";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';


const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
     {step <= 6 && <Header step={step} prevStep={prevStep} />}
      {step === 1 && (
        <Step1 nextStep={nextStep} />
      )}
      {step === 2 && (
        <Step2 nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <Step3 nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 4 && (
        <Step4 nextStep={nextStep} prevStep={prevStep} />
      )}
       {step === 5 && (
        <Step5 nextStep={nextStep} prevStep={prevStep} />
      )}
       {step === 6 && (
        <Step6 nextStep={nextStep} prevStep={prevStep} />
      )}
       {step === 7 && (
        <Step7 nextStep={nextStep} prevStep={prevStep} />
      )}
      
      {step === 8 && (
        <Step8 prevStep={prevStep} />
      )}
    </div>
  );
};

export default MultiStepForm;
