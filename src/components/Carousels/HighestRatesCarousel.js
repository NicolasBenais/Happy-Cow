import { Link } from "react-router-dom";

// Packages
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Components
import StarRating from "../../components/StarRating/StarRating";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

// Style
import styles from "./HighestRatesCarousel.module.css";

export default function HighestRatesCarousel({
  data,
  favorites,
  addToFavorites,
  removeFromFavorites,
}) {
  const filteredData = data
    .sort(function (a, b) {
      return a.category - b.category;
    })
    .sort(function (a, b) {
      return b.rating - a.rating;
    })
    .slice(0, 10);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    littleDesktop: {
      breakpoint: { max: 1200, min: 964 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 964, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      shouldResetAutoplay={false}
    >
      {filteredData.map((item, index) => {
        const favorite = favorites.find(
          (favorite) => favorite === item.placeId
        );
        return (
          <div className={styles.carousel_item} key={index}>
            <div>
              <Link to="/reviews" state={item}>
                <img
                  className={styles.carousel_img}
                  src={item.thumbnail}
                  alt=""
                />
              </Link>
              <div className={styles.favorites_button}>
                <div className={styles.favorite_btn_container}>
                  <FavoriteButton
                    id={item.placeId}
                    favorite={favorite}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                  />
                </div>
              </div>
            </div>
            <Link to="/reviews" state={item}>
              <div className={styles.carousel_itemName}>{item.name}</div>
            </Link>
            <StarRating rating={item.rating} />
          </div>
        );
      })}
    </Carousel>
  );
}
