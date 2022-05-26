import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// Packages
import StarRatingComponent from "react-star-rating-component";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Assets
import VeganIcon from "../../assets/img/veganIcon";
import VegetarianIcon from "../../assets/img/vegetarianIcon";

// Style
import styles from "./Reviews.module.css";

export default function Reviews() {
  const location = useLocation();
  const { state } = location;
  console.log(state);

  const tabAddress = state.address.split(",");

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
  return (
    <main>
      <div
        className={
          state.type === "vegan" ? styles.vegan_name : styles.vegetarian_name
        }
      >
        <h2>{state.name}</h2>
      </div>
      <div className={styles.top_container}>
        <span className={styles.type_and_stars}>
          {state.type === "vegan" && (
            <span className={styles.vegan_type}>
              <VeganIcon width={"30px"} height={"30px"} />
              <span style={{ marginLeft: "8px" }}>Vegan</span>
            </span>
          )}
          {state.type === "vegetarian" && (
            <span className={styles.vegetarian_type}>
              <VegetarianIcon width={"30px"} height={"30px"} />
              <span style={{ marginLeft: "8px" }}>Vegetarian</span>
            </span>
          )}
          <StarRatingComponent
            name="app6"
            starColor="#FEDB5A"
            emptyStarColor="#FEDB5A"
            value={state.rating}
            renderStarIcon={(index, value) => {
              return (
                <span>
                  <i
                    className={index <= value ? "fas fa-star" : "far fa-star"}
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
        </span>
        <span>
          <button className={styles.reviews_btn}>
            <span style={{ marginRight: "8px" }}>
              <i className="fa-solid fa-pencil"></i>
            </span>
            <span>Add Review</span>
          </button>
          <button className={styles.photos_btn}>
            <span style={{ marginRight: "8px" }}>
              <i className="fa-solid fa-camera"></i>
            </span>
            <span>Add Photos</span>
          </button>
        </span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.location}>
        <span>
          <Link style={{ color: "#444444" }} to="/">
            <i className="fa-solid fa-house"></i>
          </Link>
        </span>
        <span> / </span>
        <span>Europe</span>
        <span> / </span>
        <span>{tabAddress[tabAddress.length - 2]}</span>
        <span> / </span>
        <span>{tabAddress[tabAddress.length - 3]}</span>
      </div>
      <div className={styles.main_container}>
        <div className={styles.left_main_container}>
          <div className={styles.pictures_container}>
            <img
              className={styles.pictures_left_container}
              src={state.pictures[0]}
              alt=""
            />
            <div className={styles.pictures_right_container}>
              <img src={state.pictures[1]} alt="" />
              <img src={state.pictures[2]} alt="" />
              <img src={state.pictures[3]} alt="" />
              <img src={state.pictures[4]} alt="" />
            </div>
          </div>
          <div className={styles.informations_container}>
            <div>
              <div>
                <i
                  style={{ marginRight: "8px", marginTop: "16px" }}
                  className="fa-solid fa-phone fa-2xl"
                ></i>
              </div>
              <div>
                <h3>Contact</h3>
                <div className={styles.informations}>{state.phone}</div>
              </div>
            </div>
            <div>
              <div>
                <i
                  style={{ marginRight: "8px", marginTop: "16px" }}
                  className="fa-solid fa-location-dot fa-2xl"
                ></i>
              </div>
              <div>
                <h3>Find</h3>
                <div className={styles.informations}>{state.address}</div>
              </div>
            </div>
          </div>
          <p className={styles.description}>{state.description}</p>
          <nav className={styles.categories_container}>
            <span>Categories: </span>
            {(state.vegan > 0) & (state.vegOnly > 0) ? (
              <span>Vegan, VegOnly</span>
            ) : state.vegan > 0 ? (
              <span>Vegan</span>
            ) : (
              state.vegOnly > 0 && <span>VegOnly</span>
            )}
          </nav>
          <span>
            <button className={styles.reviews_btn}>
              <span style={{ marginRight: "8px" }}>
                <i className="fa-solid fa-pencil"></i>
              </span>
              <span>Add Review</span>
            </button>
            <button className={styles.photos_btn}>
              <span style={{ marginRight: "8px" }}>
                <i className="fa-solid fa-camera"></i>
              </span>
              <span>Add Photos</span>
            </button>
          </span>
        </div>
        <div className={styles.right_main_container}>
          <div className={styles.map_container} id="map">
            <MapContainer
              center={[state.location.lat, state.location.lng]}
              zoom={17}
              scrollWheelZoom={false}
              style={{ width: "347px", height: "207px" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {state.type === "vegan" ? (
                <Marker
                  position={[state.location.lat, state.location.lng]}
                  icon={veganMapMarker}
                ></Marker>
              ) : (
                <Marker
                  position={[state.location.lat, state.location.lng]}
                  icon={vegetarianMapMarker}
                ></Marker>
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </main>
  );
}
