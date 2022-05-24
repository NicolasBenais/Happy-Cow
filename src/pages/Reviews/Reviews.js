import { useLocation } from "react-router-dom";

export default function Reviews() {
  const location = useLocation();
  //   const { state } = location;
  console.log(location);
  return <div>Reviews Page</div>;
}
