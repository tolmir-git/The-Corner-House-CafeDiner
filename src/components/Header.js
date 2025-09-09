import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Close the mobile menu when the route changes
    setIsNavActive(false);
    setDropdownOpen(false);
  }, [location]);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  // Функция для клика по дропдауну ТОЛЬКО на мобильных
  const toggleDropdown = () => {
    if (window.innerWidth <= 768) {
        setDropdownOpen(!isDropdownOpen);
    }
  };

  // Ваши функции для плавной прокрутки
  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleAnchorLink = (e, anchorId) => {
    e.preventDefault(); 
    if (location.pathname === '/') {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350); 
    }
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">The Corner House</div>
        <div
          className={`hamburger ${isNavActive ? 'active' : ''}`}
          id="hamburger-menu"
          onClick={toggleNav}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-links ${isNavActive ? 'active' : ''}`} id="nav-links">
          <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
          
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            {/* onClick срабатывает только на мобильных, на десктопе - обычное поведение */}
            <span className="dropbtn" onClick={toggleDropdown}>Menu</span>
            <div
              className="dropdown-content"
              ref={dropdownRef}
              style={ window.innerWidth <= 768 ? { maxHeight: isDropdownOpen ? `${dropdownRef.current.scrollHeight}px` : '0' } : {} }
            >
              <Link to="/breakfast">Breakfast</Link>
              <Link to="/drinks">Drinks</Link>
              <Link to="/dessert">Desserts</Link>
            </div>
          </li>
          {/* ------------------------- */}

          <li><a href="#gallery" onClick={(e) => handleAnchorLink(e, 'gallery')}>Gallery</a></li>
          <li><a href="#contact" onClick={(e) => handleAnchorLink(e, 'contact')}>Contact</a></li>
          <li><a href="#about" onClick={(e) => handleAnchorLink(e, 'about')}>About</a></li>
          <li>
            <a
              href="https://www.just-eat.co.uk/restaurants-the-corner-house-southend-on-sea/menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;