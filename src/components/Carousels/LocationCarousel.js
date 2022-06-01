import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Packages
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Components
import StarRating from "../../components/StarRating/StarRating";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

// Style
import styles from "./HighestRatesCarousel.module.css";

export default function LocationCarousel({
  favorites,
  addToFavorites,
  removeFromFavorites,
}) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    littleDesktop: {
      breakpoint: { max: 1200, min: 1160 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1160, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    if (navigator.geolocation) {
      const showPosition = (position) => {
        setLocation(position.coords);
      };

      const handleError = () => {
        return null;
      };

      navigator.geolocation.getCurrentPosition(showPosition, handleError);
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );
        // const tab =[]
        // for (let i = 0; i < response.data.length; i++) {
        //         if (response.data[i].location.lat && response.data[i].location.lng < ) {

        //         }
        // }
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
}
