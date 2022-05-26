import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

// Packages
import StarRatingComponent from "react-star-rating-component";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
                    <StarRatingComponent
                      name="app6"
                      starColor="#FEDB5A"
                      emptyStarColor="#FEDB5A"
                      value={item.rating}
                      renderStarIcon={(index, value) => {
                        return (
                          <span>
                            <i
                              className={
                                index <= value ? "fas fa-star" : "far fa-star"
                              }
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
          //   center={[state.location.lat, state.location.lng]}
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%", position: "fixed" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* {state.type === "vegan" ? (
            <Marker
              position={[state.location.lat, state.location.lng]}
              icon={veganMapMarker}
            ></Marker>
          ) : (
            <Marker
              position={[state.location.lat, state.location.lng]}
              icon={vegetarianMapMarker}
            ></Marker>
          )} */}
        </MapContainer>
      </div>
    </main>
  );
}
