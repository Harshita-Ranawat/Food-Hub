import React from 'react';
import Navbar from "../components/Navbar";
import CategoryMenu from '../components/CategoryMenu';
import FoodItems from '../components/FoodItems';
import Header from '../components/Header';

const Home = () => {
  return (
  <>
    <Navbar/>
    <Header title={
        <p>Discover the best food 
        <br/> Food Hub </p>
    }
     type='home'  
    />
    <CategoryMenu/>
    <FoodItems/>
  </>
  )
}

export default Home