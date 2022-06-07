import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  
  return (
     <header className="header">
      <div className="header-logo">
      <Link className="header-logo__hover" to="/">Star Wars</Link>
      </div>
      <div className="header-nav">
        <nav className="header-nav__group">
          <div className="header-nav__item">
            <Link className="header-nav__a" to="/people"> Люди</Link>
          </div>
          <div className="header-nav__item">
          <Link className="header-nav__a" to="/planet"> Планеты</Link>
          </div>
          <div className="header-nav__item">
          <Link className="header-nav__a" to="/starship">Звездолеты   </Link>        
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
