import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav: React.FC = () => (
  <div className="Nav">
    <ul>
      <li>
        <NavLink to="/products">🛒 Product</NavLink>
      </li>
      <li>
        <NavLink to="/users">👥 Users</NavLink>
      </li>
      <li>
        <NavLink to="/verification">🔒 Verification</NavLink>
      </li>
    </ul>
  </div>
);
