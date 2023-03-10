import React from 'react';
import Featured from '../../components/featured/Featured';
import './home.scss';
import Navbar from './../../components/navbar/Navbar';
import Header from './../../components/header/Header';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from './../../components/featuredProperties/FeaturedProperties';
import MailList from './../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      {/* home container */}
      <div className="homeContainer">
          <Featured />
          <h1 className='homeTitle'>Browse by Property Type</h1>
          <PropertyList />
          <h1 className="homeTitle">Home Guest Love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
      </div>
    </div>
  )
}

export default Home