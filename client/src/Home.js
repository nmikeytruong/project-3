import React from 'react';
import app from './base';
import EditProfile from './pages/EditProfile';
import './home.css';

const Home = () => {
  return (
    <>
      <EditProfile />

      {<button onClick={() => app.auth().signOut()}>Sign Out </button>}
    </>
  );
};

export default Home;
