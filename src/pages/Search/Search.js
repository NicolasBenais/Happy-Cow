import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

// Packages
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Components
import StarRating from "../../components/StarRating/StarRating";
import MapMarker from "../../assets/MapMarkers";

// Style
import styles from "./Search.module.css";

export default function Search() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const location = useLocation();
  const { state } = location;

  //   Map Markers
  const veganMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_vegan.svg?1",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const vegetarianMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_vegetarian.svg?1",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

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

          const tab = [];
          for (let i = 0; i < response.data.length; i++) {
            if (tab.indexOf(response.data[i].type) === -1) {
              tab.push(response.data[i].type);
            }
          }
          console.log(tab);
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
            return (
              //   <Link to="/reviews" state={item}>
              <div className={styles.item} key={item.placeId}>
                <div className={styles.item_index}>{index + 1}</div>
                <img src={item.thumbnail} alt="" />
                <div className={styles.item_informations}>
                  <div className={styles.item_name}>{item.name}</div>
                  <div className={styles.item_starsRates}>
                    <StarRating rating={item.rating} />
                  </div>
                  <div className={styles.item_price_distance}>
                    <span className={styles.price}></span>
                    <span className={styles.distance}></span>
                  </div>
                </div>
              </div>
              //   </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.right_main_container}>
        <MapContainer
          center={[48.8564449, 2.4002913]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%", position: "fixed" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((item) => {
            return <MapMarker item={item} />;
          })}
        </MapContainer>
      </div>
    </main>
  );
}
