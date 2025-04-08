import './App.css';
import Image from "./assets/homepage.png";
import Info from "./About/Info";
import Hamburger from "hamburger-react";
// import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/Info"

// const aboutMe = () => {
// return (
// <Link href="./About/Info.jsx"></Link>
// )};

function App() {
  return (
    <header>
      <>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About/Info.jsx" >About Me</a></li>
          <li><a href="/Gallery" >Gallery</a></li>
          <li><a href="/PlacesVisited" >Places Visited</a></li>
          <li><a href="/TravelMap">Travel Map</a></li>
          <li><a href="/BucketList" >Bucket list</a></li>
        </ul>
      </nav>

      {/* <BrowserRouter>
      <Routes>
        <Route exact path='/' component={} />
        <Route path='/About' component={About}/>
        <Route path='/Gallery' component={Gallery}/>
        <Route path='/PlacesVisited' component={PlacesVisited}/>
        <Route path='/TravelMap' component={TravelMap}/>
        <Route path='/BucketList' component={BucketList}/>
      </Routes>
      </BrowserRouter> */}

        <img src={Image} alt="A picture describing my travel plan" />
        <div className="pageTitle">
          <h1>My journey within & beyond</h1>
          <h2 style={{ color: "black" }}>I am going to share all my travel stories and details here and
            make this a <br></br>very good memory lane for people to know me.</h2>
            <button onClick={
              <Link to="./About/Info.jsx"></Link>
            }>Welcome to my Journey!</button>
        </div>
      </>
    </header>
  );
}

export default App;
