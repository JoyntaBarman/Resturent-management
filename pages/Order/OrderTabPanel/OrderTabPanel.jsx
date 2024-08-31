import { useEffect, useState } from 'react';
import OrderCard from '../../../src/components/OrderCard/OrderCard';
import PropTypes from 'prop-types';

const OrderTabPanel = ({ items }) => {
  // States
  const [newItems, setNewItems] = useState([]);
  // const [items, setItems] = useState([]);

  // const axiosPublic = useAxiosPublic();
  // axiosPublic.get(`menu/${itemName}`).then(res => setItems(res.data));

  // Functions
  function createArray(num) {
    let arr = [];

    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    return arr;
  }

  function paginationFunc(pageNum) {
    const startSlice = 6 * (pageNum - 1);
    const endSlice = 6 * pageNum;
    setNewItems(items.slice(startSlice, endSlice));
  }

  // Operation
  const pagesItems = 6;
  const pages = Math.ceil(items.length / pagesItems);

  // let newItems = items.slice(0, pagesItems);
  useEffect(() => {
    setNewItems(items.slice(0, pagesItems));
  }, [items]);

  const pagesArray = createArray(pages);

  return (
    <>
      {newItems && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newItems.map((item, index) => (
              <OrderCard key={index} item={item}></OrderCard>
            ))}
          </div>

          <div className="flex gap-2 mt-4 justify-center">
            {pagesArray.length > 1 &&
              pagesArray.map((pageNum, index) => (
                <button
                  key={index}
                  onClick={() => paginationFunc(pageNum)}
                  className="p-2 border-black border-[1px]"
                >
                  {pageNum}
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

OrderTabPanel.propTypes = {
  items: PropTypes.array,
};

export default OrderTabPanel;
