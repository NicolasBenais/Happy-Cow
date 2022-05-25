import { useState } from "react";

// Packages
import HighestRatesCarousel from "../../components/Carousels/HighestRatesCarousel";

// Components
import Searchbar from "../../components/SearchBar/Searchbar";

// Assets
import bannerImg from "../../assets/img/bannerImg.webp";

// Style
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.banner}>
        <img src={bannerImg} alt="" />
        <p>Find Vegan Restaurants Nearby</p>
        <div className={styles.searchbar}>
          <Searchbar />
        </div>
      </div>
      <div className={styles.main_container}>
        <h2 className={styles.carousel_title}>
          10 Best Vegan Restaurants in Paris, France
        </h2>
        <HighestRatesCarousel />
      </div>
    </main>
  );
}
