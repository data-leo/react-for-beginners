import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <Link to={`/`}>Home</Link>
      </div>
      <div>
        <Link to={`/about`}>About</Link>
      </div>
    </div>
  );
}

export default Navbar;
