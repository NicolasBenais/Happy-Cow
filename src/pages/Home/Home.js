import HighestRatesCarousel from "../../components/Carousels/HighestRatesCarousel";

// Style
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <h2 className={styles.carousel_title}>
        10 Best Vegan Restaurants in Paris, France
      </h2>
      <HighestRatesCarousel />
    </div>
  );
}
