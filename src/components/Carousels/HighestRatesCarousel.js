import axios from "axios";
import { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HighestRatesCarousel() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    littleDesktop: {
      breakpoint: { max: 1200, min: 991 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );
        setData(
          response.data
            .sort(function (a, b) {
              return b.rating - a.rating;
            })
            .slice(0, 10)
        );

        // console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="main_container">
      <Carousel className="HighestRatesCarousel" responsive={responsive}>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img
                style={{ height: "100px", width: "100px" }}
                source={item.thumbnail}
                alt="test"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
