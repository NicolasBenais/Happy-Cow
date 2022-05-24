import { useLocation } from "react-router-dom";

export default function Reviews() {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  return <div>Reviews Page</div>;
}
