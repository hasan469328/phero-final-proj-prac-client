import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderCard from "../OrderCard/OrderCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
  // select index accordingly tab name
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  console.log(initialIndex)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  
  console.log(category) 
  const [menu] = useMenu()
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover img={orderCoverImg} title={'Order'} subTitle={"Order Something"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='mb-20'>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
        <OrderCard items={salad}></OrderCard>
      </TabPanel>
      <TabPanel>
        <OrderCard items={pizza}></OrderCard>
      </TabPanel>
      <TabPanel>
        <OrderCard items={soup}></OrderCard>
      </TabPanel>
      <TabPanel>
        <OrderCard items={dessert}></OrderCard>
      </TabPanel>
      <TabPanel>
        <OrderCard items={drinks}></OrderCard>
      </TabPanel>
     
    </Tabs>
    </div>
  );
};

export default Order;