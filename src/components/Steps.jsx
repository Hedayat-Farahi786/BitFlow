import React from 'react';

const Steps = () => {


    const stepsData = [
        {
            icon: 'fas fa-question-circle',
            text: 'You Ask'
        },
        {
            icon: "fas fa-arrow-right",
            text: 'We Proceed'
        },
        {
            icon: "fas fa-handshake",
            text: 'Negotiate'
        },
        {
            icon: "fas fa-gift",
            text: 'You Get'
        },
    ]


    return (
    <div className="py-10 bg-primary w-full flex flex-col items-center justify-center space-y-10">
      <div className='flex flex-col items-center justify-center space-y-10 w-max'>
      <p className='text-base font-semibold text-white'>How to start</p>
        <h1 className='text-5xl font-bold text-secondary'>Easy Process</h1>
        <p>We specialize in helping you build a team of expert developers, testers, and leaders.</p>
      </div>
      <div className='w-full flex items-center justify-center space-x-32'>
            {
                stepsData.map((step, ind) => (
                    <div key={ind} className='flex flex-col items-center  justify-center'>
                        <div className='text-7xl text-white'>
                        <i className={step.icon}></i>
                        </div>
                        <p className='font-medium text-xl'><span className='font-semibold text-3xl mr-2'>{'0' + (ind + 1)}</span>{step.text}</p>
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default Steps;
