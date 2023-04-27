import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Sorry, the page you requested could not be found.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;