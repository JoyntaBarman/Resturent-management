import { useContext, useEffect, useState } from "react";
import useMenu from "../../../src/Hooks/useMenu";
import AuthContext from "../../../src/provider/AuthContext";
import useAxiosPublic from "../../../src/Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MenuItem = ({ category, children }) => {
  // const [menu] = useMenu();
  const axiospublic = useAxiosPublic();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axiospublic.get(`menu/${category}`).then((res) => setMenu(res.data));
  }, []);

  const popularMenu = menu.filter((item) => item.category === category);

  return (
    <section>
      {children}

      {
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-4 lg:mx-24 mx-4 space-y-4">
          {popularMenu.map((item, index) => {
            return (
              <div key={index} className="flex gap-4 justify-between">
                <div className="lg:w-1/6 w-1/4">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="w-5/6">
                  <div className="flex justify-between">
                    <h4 className="text-2xl font-medium">
                      {item.name}----
                    </h4>
                    <p className="text-[#BB8506]">{item.price}</p>
                  </div>
                  <p>{item.recipe}</p>
                </div>
              </div>
            );
          })}
        </div>
      }
      <div className="flex justify-center mt-10">
        <Link to={"/order"} className="bg-black text-white px-5 py-3 rounded">
          order now
        </Link>
      </div>
    </section>
  );
};

export default MenuItem;
