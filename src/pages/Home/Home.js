// Components
import Searchbar from "../../components/SearchBar/Searchbar";
import HighestRatesCarousel from "../../components/Carousels/HighestRatesCarousel";
import LocationCarousel from "../../components/Carousels/LocationCarousel";

// Assets
import bannerImg from "../../assets/img/bannerImg.webp";

// Style
import styles from "./Home.module.css";

export default function Home({
  favorites,
  addToFavorites,
  removeFromFavorites,
}) {
  return (
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
          favorites={favorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
        <LocationCarousel
          favorites={favorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
    </main>
  );
}
