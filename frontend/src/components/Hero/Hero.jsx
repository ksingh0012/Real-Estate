import SearchBar from "../searchBar/SearchBar";
import "./Hero.css";
import CountUp from "react-countup";
// import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            
            <h1>
              Discover <br />
              Most Suitable
              <br /> Property
            </h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

         <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={250} end={300} duration={2} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={100} end={150} duration={2} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>


          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="houses" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
