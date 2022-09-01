import "./App.css";
import React from "react";
import image from "./Components/bg3+dark-footer.png";
import Header from "./Components/Header";
import Category from "./Components/Category";
import { Button } from "react-bootstrap";
import Difficulty from "./Components/Difficulty";
import Questions from "./Components/Questions";
import Avatar from "./Components/Avatar";
import Footer from "./Components/Footer";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbCircleDotted,
  TbCircle,
} from "react-icons/tb";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${image})` }}>
      <Header />
      <Category />
      <Difficulty />
      <Questions />
      <Avatar />
      <Footer />
      <p></p>
    </div>
  );
}

export default App;
