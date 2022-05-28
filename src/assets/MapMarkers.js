// Packages
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default function MapMarker({ item }) {
  const itemPosition = [item.location.lat, item.location.lng];

  // -------- MARKERS --------
  // Veg Store
  const vegStoreMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_veg-shop.svg",
    iconSize: [30, 30],
    inconAnchor: [15, 30],
  });

  // vegan
  const veganMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_vegan.svg?1",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // vegetarian
  const vegetarianMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_vegetarian.svg?1",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Other
  const otherMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_other.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Health Store
  const healthStoreMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_health-store.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // veg-options
  const vegOptionsMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_veg-friendly.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Ice Cream
  const iceCreamMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_ice-cream.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Juice Bar
  const juiceBarMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_juice-bar.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Professional
  const proMapMarker = new L.Icon({
    iconUrl:
      "https://www.happycow.net/img/category/category_vegan-professional.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Organization
  const organizationMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_organization.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Bakery
  const bakeryMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_bakery.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Catering
  const cateringMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_catering.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // B&B
  const bAndBMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_b-b.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Market Vendor
  const marketVendorMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_market-vendor.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Food Truck
  const foodTruckMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_food-truck.svg?1",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Delivery
  const deliveryMapMarker = new L.Icon({
    iconUrl: "https://www.happycow.net/img/category/category_delivery.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  if (item.type === "Veg Store") {
    return <Marker position={itemPosition} icon={vegStoreMapMarker}></Marker>;
  } else if (item.type === "vegan") {
    return <Marker position={itemPosition} icon={veganMapMarker}></Marker>;
  } else if (item.type === "vegetarian") {
    return <Marker position={itemPosition} icon={vegetarianMapMarker}></Marker>;
  } else if (item.type === "Other") {
    return <Marker position={itemPosition} icon={otherMapMarker}></Marker>;
  } else if (item.type === "Health Store") {
    return (
      <Marker position={itemPosition} icon={healthStoreMapMarker}></Marker>
    );
  } else if (item.type === "veg-options") {
    return <Marker position={itemPosition} icon={vegOptionsMapMarker}></Marker>;
  } else if (item.type === "Ice Cream") {
    return <Marker position={itemPosition} icon={iceCreamMapMarker}></Marker>;
  } else if (item.type === "Juice Bar") {
    return <Marker position={itemPosition} icon={juiceBarMapMarker}></Marker>;
  } else if (item.type === "Professional") {
    return <Marker position={itemPosition} icon={proMapMarker}></Marker>;
  } else if (item.type === "Organization") {
    return (
      <Marker position={itemPosition} icon={organizationMapMarker}></Marker>
    );
  } else if (item.type === "Bakery") {
    return <Marker position={itemPosition} icon={bakeryMapMarker}></Marker>;
  } else if (item.type === "Catering") {
    return <Marker position={itemPosition} icon={cateringMapMarker}></Marker>;
  } else if (item.type === "B&B") {
    return <Marker position={itemPosition} icon={bAndBMapMarker}></Marker>;
  } else if (item.type === "Market Vendor") {
    return (
      <Marker position={itemPosition} icon={marketVendorMapMarker}></Marker>
    );
  } else if (item.type === "Food Truck") {
    return <Marker position={itemPosition} icon={foodTruckMapMarker}></Marker>;
  } else if (item.type === "Delivery") {
    return <Marker position={itemPosition} icon={deliveryMapMarker}></Marker>;
  }
}
