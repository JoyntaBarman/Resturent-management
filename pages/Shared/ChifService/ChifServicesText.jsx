import React from 'react';

const ChifServicesText = ({children,className}) => {

  return (
    <div className={`text-center space-y-4 ${className? className: 'bg-black opacity-70 text-white'} absolute ;lg:w-3/4 w-5/6 lg:p-16 p-4 rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
      {
        children
      }
    </div>
  );
};

export default ChifServicesText;