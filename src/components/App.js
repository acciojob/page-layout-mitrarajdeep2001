
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Children from "./Children";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
        <Header header={'Welcome to my website'}/>
        <Children child={'This is the content of my website.'}/>
        <Footer>&#169; 2023 My Website. All rights reserved.</Footer>
    </div>
  )
}

export default App
