import { Link } from "react-router-dom";

// Packages
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Components
import StarRating from "../components/StarRating/StarRating";

// Styles
import styles from "./MapMarkers.module.css";

const icons = {
  "Veg Store": "https://www.happycow.net/img/category/category_veg-shop.svg",
  vegan: "https://www.happycow.net/img/category/category_vegan.svg?1",
  vegetarian: "https://www.happycow.net/img/category/category_vegetarian.svg?1",
  Other: "https://www.happycow.net/img/category/category_other.svg",
  "Health Store":
    "https://www.happycow.net/img/category/category_health-store.svg",
  "veg-options":
    "https://www.happycow.net/img/category/category_veg-friendly.svg",
  "Ice Cream": "https://www.happycow.net/img/category/category_ice-cream.svg",
  "Juice Bar": "https://www.happycow.net/img/category/category_juice-bar.svg",
  Professional:
    "https://www.happycow.net/img/category/category_vegan-professional.svg",
  Organization:
    "https://www.happycow.net/img/category/category_organization.svg",
  Bakery: "https://www.happycow.net/img/category/category_bakery.svg",
  Catering: "https://www.happycow.net/img/category/category_catering.svg",
  "B&B": "https://www.happycow.net/img/category/category_b-b.svg",
  "Market Vendor":
    "https://www.happycow.net/img/category/category_market-vendor.svg",
  "Food Truck":
    "https://www.happycow.net/img/category/category_food-truck.svg?1",
  Delivery: "https://www.happycow.net/img/category/category_delivery.svg",
};

export default function MapMarker({ item, popup }) {
  const itemPosition = [item.location.lat, item.location.lng];

  const marker = new L.Icon({
    iconUrl: icons[item.type],
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  return (
    <Marker position={itemPosition} icon={marker}>
      {popup && (
        <Popup closeButton={false}>
          <Link to="/reviews" state={item}>
            <img
              className={styles.thumbnail}
              src={item.thumbnail}
              alt="Restaurant thumbnail"
            />
            <div className={styles.item_name}>{item.name}</div>
          </Link>
          <StarRating rating={item.rating} />
          <div className={styles.item_address}>{item.address}</div>
        </Popup>
      )}
    </Marker>
  );
}
