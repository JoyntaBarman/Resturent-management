import { useState,  } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../src/Hooks/useMenu';
import OrderTabPanel from '../OrderTabPanel/OrderTabPanel';
// import { useLoaderData } from 'react-router-dom';

// const OrderTabPanel = lazy(() => import('../OrderTabPanel/OrderTabPanel'));

const OrderTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // const data = useLoaderData();
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const soup = menu.filter((item) => item.category === 'soup');
  const dessert = menu.filter((item) => item.category === 'soup');
  const drinks = menu.filter((item) => item.category === 'drinks');


  return (
    <>
    {
      // menu || <p>loading...</p>
    }
    { menu && <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className={'text-center uppercase'}>
        <Tab>salad</Tab>
        <Tab>pizza</Tab>
        <Tab>soups</Tab>
        <Tab>dessert</Tab>
        <Tab>drinks</Tab>
      </TabList>

      <TabPanel>

          {
            salad ? <OrderTabPanel items={salad}></OrderTabPanel> : 'Loading...'
          }
      </TabPanel>
      <TabPanel>
          <OrderTabPanel items={pizza}></OrderTabPanel>
      </TabPanel>
      <TabPanel>
        <OrderTabPanel items={soup}></OrderTabPanel>

      </TabPanel>
      <TabPanel>
        <OrderTabPanel items={dessert}></OrderTabPanel>

      </TabPanel>
      <TabPanel>
        <OrderTabPanel items={drinks}></OrderTabPanel>
      </TabPanel>
    </Tabs>}
    </>
  );
};

export default OrderTabs;
