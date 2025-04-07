import './App.css'
import Image from "./assets/homepage.png"

function App() {
  return (
    <header>
      <article>
      <img src={Image} alt="A picture describing my travel plan" />
      <div className="pageTitle">
        <h1>My journey within & beyond</h1>
        <h2 style={{color:"black"}}>I am going to share all my travel stories and details here and
          make this a <br></br>very good memory lane for people to know me.</h2>
      </div>
      </article>
    </header>
  );
}

export default App;
