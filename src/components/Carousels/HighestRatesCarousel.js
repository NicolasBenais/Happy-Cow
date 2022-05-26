import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Packages
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRatingComponent from "react-star-rating-component";

// Style
import styles from "./HighestRatesCarousel.module.css";

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
              return a.category - b.category;
            })
            .sort(function (a, b) {
              return b.rating - a.rating;
            })
            .slice(0, 10)
        );

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
    <Carousel
      className={styles.HighestRatesCarousel}
      responsive={responsive}
      swipeable={false}
      draggable={false}
      shouldResetAutoplay={false}
    >
      {data.map((item, index) => {
        return (
          <div className={styles.carousel_item} key={index}>
            <Link to="/reviews" state={item}>
              <img
                className={styles.carousel_img}
                src={item.thumbnail}
                alt=""
              />
            </Link>
            <Link to="/reviews" state={item}>
              <div className={styles.carousel_itemName}>{item.name}</div>
            </Link>

            <StarRatingComponent
              name="app6"
              starColor="#FEDB5A"
              emptyStarColor="#FEDB5A"
              value={item.rating}
              renderStarIcon={(index, value) => {
                return (
                  <span>
                    <i
                      className={index <= value ? "fas fa-star" : "far fa-star"}
                    />
                  </span>
                );
              }}
              renderStarIconHalf={() => {
                return (
                  <span>
                    <span style={{ position: "absolute" }}>
                      <i className="far fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star-half" />
                    </span>
                  </span>
                );
              }}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
