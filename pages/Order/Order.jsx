import React from 'react';
import ChifService from '../Shared/ChifService/ChifService';

// Image
import orderImage from '../../src/assets/shop/banner2.jpg';
import ChifServicesText from '../Shared/ChifService/ChifServicesText';
import Tabs from './OrderTabs/OrderTabs';

const Order = () => {
  return (
    <div>
      <ChifService image={orderImage}>
        <ChifServicesText>
          <h3 className='text-5xl'>OUR SHOP</h3>
          <p>Would you like to try a dish?</p>
        </ChifServicesText>
      </ChifService>
      <Tabs></Tabs>
    </div>
  );
};

export default Order;
