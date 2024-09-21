/**
 * This code was generated by Builder.io.
 */
import React from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import Navigation from "./Navigation";
import SubHeader from "../main/subHeader";
const Header = () => {
  return (
    <header className="flex justify-start flex-col border border-b">
      <TopBar />
      <MainHeader />
      <Navigation />
     
    </header>
  );
};

export default Header;
