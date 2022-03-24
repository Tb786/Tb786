import { Link, NavLink, Route } from "react-router-dom";
import Movies from "./Movies";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
        <NavLink to="/movies" element={<Movies/>}>Movies </NavLink>
        </li>
        
      </ul>
    </nav>
  )
}