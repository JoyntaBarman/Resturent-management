import Heading from '../../../src/components/Heading/Heading';

import img1 from '../../../src/assets/home/featured.jpg';

const FeaturedMenu = () => {
  return (
    <section>
      <div className="bg-FeaturedMenuBG  bg-fixed ">
        <div className='bg-black opacity-70 p-16'>
          <Heading
            text={{ subTitle: 'check it out', title: 'from our menu' }}
            color={'text-white border-x-white'}
          ></Heading>
          <div className="mt-6 flex flex-col lg:flex-row justify-between gap-4">
            <div>
              <img className="" src={img1} alt="" />
            </div>
            <div className="my-auto text-white">
              <p>
                March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error voluptate facere, deserunt
                dolores maiores quod nobis quas quasi. Eaque repellat recusandae
                ad laudantium tempore consequatur consequuntur omnis ullam
                maxime tenetur.
              </p>
              <button className="btn btn-outline text-white border-0 border-b-2">
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
