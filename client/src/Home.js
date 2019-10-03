import React from "react";
import app from "./base";
import Nav from "./components/Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Nav/>

      {<button onClick={() => app.auth().signOut()}>Sign Out </button>}
    </>
  );
};

export default Home;
