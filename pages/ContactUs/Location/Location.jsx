import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

import Heading from '../../../src/components/Heading/Heading';

const Location = () => {

  const locationDetails = [
    {
      icon: <BiPhoneCall/>,
      name: 'Phone',
      number: '+88101751224'
    },
    {
      icon: <FaLocationDot/>,
      name: 'Address',
      number: '+88101751224'
    },
    {
      icon: <GoClockFill/>,
      name: 'Working Hour',
      number: '+88101751224'
    },
  ]

  return (
    <div>
      <Heading text={{ subTitle: 'Visit Us', title: 'Our Location' }}></Heading>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {
          locationDetails.map( location => <div>
            <div className="bg-[#D1A054] rounded-sm flex justify-center p-4 text-2xl text-white">
              {location.icon}
            </div>
            <div className="flex flex-col space-y-4 mt-4 items-center">
              <h3 className="text-3xl font-semibold">{location.name}</h3>
              <p>{location.number}</p>
            </div>
          </div>)
        }

      </div>
    </div>
  );
};

export default Location;
