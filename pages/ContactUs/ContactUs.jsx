import React from 'react';
import { Helmet } from 'react-helmet';
import ChifService from '../Shared/ChifService/ChifService';
import bannerImg from '../../src/assets/contact/banner.jpg';
import ChifServicesText from '../Shared/ChifService/ChifServicesText';
import Location from './Location/Location';
import Heading from '../../src/components/Heading/Heading';
import ContactForm from './ContactForm/ContactForm';

const ContactUs = () => {
  return (
    <div className="space-y-24">
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>

      <ChifService image={bannerImg}>
        <ChifServicesText>
          <h3 className="text-5xl">Contact Us</h3>
          <p>Would you like to try a dish?</p>
        </ChifServicesText>
      </ChifService>

      <div className='m-10 md:m-24 space-y-24'>
        <Location />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
