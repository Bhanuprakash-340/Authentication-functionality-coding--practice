import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="app-container">
    <ul className="list-items">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)
export default Header
