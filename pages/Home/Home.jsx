import Products from './Products/Products';
import Banner from './Banner/Banner';
import MenuItem from '../Shared/MenuItem/MenuItem';
import FeaturedMenu from './FeaturedMenu/FeaturedMenu';
import { Helmet } from 'react-helmet';
import ChifService from '../Shared/ChifService/ChifService';

// image
import chifServiceImg from '../../src/assets/home/chef-service.jpg';
import ChifServicesText from '../Shared/ChifService/ChifServicesText';
import ChifRecomand from '../../src/components/ChifRecomand/ChifRecomand';
import Testimonial from './Testimonial.jsx/Testimonial';
import PhoneNumber from './PhonNumber.jsx/PhoneNumber';
import Heading from '../../src/components/Heading/Heading';

const Home = () => {
  return (
    <div className="space-y-24">
      <Helmet>
        <title>Bistro boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="space-y-24 lg:mx-24 mx-2">
        <Products></Products>
        <ChifService image={chifServiceImg}>
          <ChifServicesText className="bg-white text-black">
            <h3 className="text-3xl font-semibold">Bistro Boss</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </ChifServicesText>
        </ChifService>
        <MenuItem category={'popular'}>
          <Heading
            text={{ subTitle: 'check it out', title: 'from our menu' }}
          ></Heading>
        </MenuItem>
        <PhoneNumber></PhoneNumber>
        <ChifRecomand></ChifRecomand>
      </div>
      <FeaturedMenu></FeaturedMenu>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
