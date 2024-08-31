import { Helmet } from 'react-helmet';
import ChifService from '../Shared/ChifService/ChifService';
import MenuItem from '../Shared/MenuItem/MenuItem';

// image
import menuBanner from '../../src/assets/menu/banner3.jpg';
import dasertImage from '../../src/assets/menu/dessert-bg.jpeg';
// import saladImage from '../../src/assets/menu/salad-bg.jpg';
// import soupImage from '../../src/assets/menu/soup-bg.jpg';
// import pizzaImage from '../../src/assets/menu/pizza-bg.jpg';
import ChifServicesText from '../Shared/ChifService/ChifServicesText';
import Heading from '../../src/components/Heading/Heading';

const Menu = () => {
  return (
    <div className='space-y-24'>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* page component */}
      {/* image highliter */}
      <ChifService image={menuBanner}>
        <ChifServicesText>
          <h3 className="text-5xl">OUR MENU</h3>
          <p>Would you like to try a dish?</p>
        </ChifServicesText>
      </ChifService>


      <MenuItem category={'offered'}>
      <Heading
        text={{ subTitle: "don't miss", title: "Today's offer" }}
      ></Heading>
      </MenuItem>

      {/* Desert */}
      <ChifService image={dasertImage}>
        <ChifServicesText  text={'text-white'}>
          <h3 className="text-5xl">DESSERTS</h3>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </ChifServicesText>
      </ChifService>
      <MenuItem category={'dessert'}></MenuItem>

      {/* Salads */}
      <ChifService image={dasertImage}>
        <ChifServicesText  text={'text-white'}>
          <h3 className="text-5xl">SALADS</h3>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </ChifServicesText>
      </ChifService>
      <MenuItem category={'salad'}></MenuItem>

      {/* supe */}
      <ChifService image={dasertImage}>
        <ChifServicesText  text={'text-white'}>
          <h3 className="text-5xl">SOUPS</h3>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </ChifServicesText>
      </ChifService>
      <MenuItem category={'soup'}></MenuItem>
    </div>
  );
};

export default Menu;
