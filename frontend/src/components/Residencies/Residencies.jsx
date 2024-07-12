import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";


const Residencies = () => {

  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
        <div className="wrapper">
            <span>Error while fetching data</span>
        </div>
    );
}

if (isLoading || !data) {
    return (
        <div className="wrapper flexCenter" style={{ height: '100vh' }}>
            <span>Loading...</span>
        </div>
    );
}


  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          {/* slider */}
          {data.slice(9,16).map((card, i) => ( // slice method to get only first 8 properties
            <SwiperSlide key={i}>
              <PropertyCard card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;
