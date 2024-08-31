import React from 'react';

const ChifService = ({image, children}) => {


  return (
    <div className=" relative h-[75vh] overflow-hidden object-cover">
      <img className='w-full h-full object-cover' src={image} alt="" />
        {
          children
        }

    </div>
  );
};

export default ChifService;
