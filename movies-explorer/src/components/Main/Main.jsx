import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderAuthorized from "../HeaderAuthorized/HeaderAuthorized";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

const Main = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? <HeaderAuthorized /> : <Header />}
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;
