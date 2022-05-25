import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      const newState = state.split("");

      let str = "";
      for (let i = 0; i < newState.length; i++) {
        if (i === 0) {
          str += newState[i].toUpperCase();
        } else {
          str += newState[i];
        }
      }
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
          );

          const tab = [];

          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].address.indexOf(str) !== -1) {
              tab.push(response.data[i]);
            }
          }

          // console.log(tab);
          setData(tab);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
          );
          setData(response.data);
          setIsLoading(false);
        } catch (error) {}
      };
      fetchData();
    }
  }, [state]);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <main>
      <div>Search Page</div>
    </main>
  );
}
