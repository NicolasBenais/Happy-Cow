import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

// Packages
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Components
import StarRating from "../../components/StarRating/StarRating";
import MapMarker from "../../assets/MapMarkers";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

// Assets
import noImg from "../../assets/img/noimg.png";

// Style
import styles from "./Search.module.css";

export default function Search({
  favorites,
  addToFavorites,
  removeFromFavorites,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );

        if (state) {
          const filteredData = response.data.filter((item) => {
            return item.address.toLowerCase().includes(state.toLowerCase());
          });
          setData(filteredData);
        } else {
          setData(response.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [state]);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <main className={styles.main_container}>
      <div className={styles.left_main_container}>
        <div className={styles.top_left_main_container}>
          We found {data.length} results for "{state}"
        </div>
        <div className={styles.searchbar}>
          <input
            className={styles.searchbar_input}
            type="text"
            placeholder="Search for city, region, or zipcode"
            value={state}
          />
        </div>
        <div className={styles.filters_container}></div>
        <div className={styles.separator}></div>
        <div className={styles.left_main_wrapper}>
          {data.map((item, index) => {
            const favorite = favorites.find(
              (favorite) => favorite === item.placeId
            );

            return (
              <div className={styles.item} key={item.placeId}>
                <Link to="/reviews" state={item}>
                  {item.thumbnail.includes("no-image.jpg") ? (
                    <img className={styles.item_img} src={noImg} alt="" />
                  ) : (
                    <img
                      className={styles.item_img}
                      src={item.thumbnail}
                      alt=""
                    />
                  )}
                </Link>
                <div className={styles.item_informations}>
                  <Link to="/reviews" state={item}>
                    <div className={styles.item_name}>{item.name}</div>
                  </Link>
                  <div className={styles.item_starsRates}>
                    <StarRating rating={item.rating} />
                  </div>
                  <div className={styles.favorite_button}>
                    <FavoriteButton
                      id={item.placeId}
                      favorite={favorite}
                      addToFavorites={addToFavorites}
                      removeFromFavorites={removeFromFavorites}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.right_main_container}>
        <MapContainer
          id="map"
          center={
            data
              ? [data[0].location.lat, data[0].location.lng]
              : [48.8564449, 2.4002913]
          }
          zoom={14}
          scrollWheelZoom={false}
          style={{ width: "50vw", height: "100vh", position: "fixed" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((item) => {
            return <MapMarker key={item.placeId} item={item} popup={true} />;
          })}
        </MapContainer>
      </div>
    </main>
  );
}

// This function to know exactly the types of all of the restaurants
// const tab = [];
// for (let i = 0; i < response.data.length; i++) {
//   if (tab.indexOf(response.data[i].type) === -1) {
//     tab.push(response.data[i].type);
//   }
// }
// console.log(tab);
