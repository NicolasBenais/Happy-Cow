import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Searchbar from "../../components/SearchBar/Searchbar";
import HighestRatesCarousel from "../../components/Carousels/HighestRatesCarousel";
import HotelsCarousel from "../../components/Carousels/HotelsCarousel";

// Assets
import bannerImg from "../../assets/img/bannerImg.webp";

// Style
import styles from "./Home.module.css";

export default function Home({
  favorites,
  addToFavorites,
  removeFromFavorites,
}) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );

        setData(response.data);
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
    <main>
      <div className={styles.banner}>
        <img src={bannerImg} alt="" />
        <div className={styles.banner_content}>
          <p>Find Vegan Restaurants Nearby</p>
          <div className={styles.searchbar}>
            <Searchbar />
          </div>
        </div>
      </div>
      <div className={styles.main_container}>
        <h2 className={styles.carousel_title}>
          10 Best Vegan Restaurants in Paris, France
        </h2>
        <HighestRatesCarousel
          data={data}
          favorites={favorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
        <h2 className={styles.carousel_title}>
          10 Best Health Stores in Paris, France
        </h2>
        <HotelsCarousel
          data={data}
          favorites={favorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
    </main>
  );
}
