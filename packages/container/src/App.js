import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { mount } from "marketing/MarketingApp";
import { BrowserRouter } from "react-router-dom";

console.log(mount);

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <hr />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
