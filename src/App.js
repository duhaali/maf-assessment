import React from 'react';
import './App.css';
import Gallery from "./Components/Gallery";
import SocialMedia from "./Components/SocialMedia";
import Aside from "./Components/Aside";

function App() {
  return (
    <main className="flex flex-wrap flex-col relative lg:flex-row">
      <Gallery></Gallery>
      <Aside></Aside>
      <SocialMedia></SocialMedia>
    </main>
  );
}
export default App;
