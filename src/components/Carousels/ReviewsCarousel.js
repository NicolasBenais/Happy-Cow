// Packages
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Style
import styles from "./HighestRatesCarousel.module.css";

export default function ReviewsCarousel({ pictures }) {
  const responsive = {
    tablet: {
      breakpoint: { max: 824, min: 600 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      draggable={false}
      shouldResetAutoplay={false}
    >
      {pictures.map((item, index) => {
        return (
          <div className={styles.carousel_item} key={index}>
            <img className={styles.carousel_img} src={item} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
}
