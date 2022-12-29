import React from 'react';
import Featured from '../../components/featured/Featured';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './home.scss';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      {/* home container */}
      <div className="homeContainer">
          <Featured />
          <h1 className='homeTitle'>Browse by property type</h1>
      </div>
    </div>
  )
}

export default Home