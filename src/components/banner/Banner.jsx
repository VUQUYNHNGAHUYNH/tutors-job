import "./Banner.scss";
import { AiOutlineSearch } from "react-icons/ai";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="left">
          <h1>Find the perfect tutor jobs
            <br /> for your children</h1>
          <div className="search">
            <div className="searchInput">
              <AiOutlineSearch size={25} className="icon" />
              <input type="text" placeholder="Find a job post" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>English</button>
            <button>Math</button>
            <button>Literature</button>
            <button>Biology</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/banner.png" alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
