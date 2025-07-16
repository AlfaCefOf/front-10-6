import { useState } from "react";
import "./App.css";
import Footer from "./assets/Footer";
import Item from "./assets/ItemComp";
import LeftBar from "./assets/LeftBar";
import logo from "./assets/img/Logo (15).png";
import arrow from "./assets/img/arrow.png";
import profile from "./assets/img/profile.png";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="container">
        <header>
          <nav>
            <div className="leftSide">
              <a href="./index.html">
                <img src={logo} alt="" />
              </a>
              <div className="search-bar">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search"></i>
              </div>
              <a href="#">
                <p>Home</p>
              </a>
              <a href="#">
                <p>Explore</p>
              </a>
            </div>
            <div className="rightSide">
              <i className="fas fa-bell"></i>
              <i className="fas fa-comment-alt"></i>
              <button>Wallet</button>
              <img src={arrow} alt="" />
              <img src={profile} alt="" />
            </div>
          </nav>
        </header>
        <div className="secondLine">
          <LeftBar />
          <Item searchQuery={searchQuery} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
