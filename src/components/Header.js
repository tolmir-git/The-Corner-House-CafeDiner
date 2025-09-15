import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const styles = {
  dropdownStyles: `
    /* ... other styles ... */
    @media (min-width: 769px) {
      .dropdown-content {
        display: none;
        background: #85725B;
        position: absolute;
        border-radius: 20px;
        overflow: hidden;
        padding: 10px 15px;
      }
      
      .dropdown:hover .dropdown-content {
        display: block;
      }

      .dropdown-content a {
        padding: 10px 20px;
        text-align: left; /* Change this to left */
      }
    }

    /* ... other mobile styles ... */


    /* Убираем старый стиль со стрелкой */
    .dropbtn::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid white;
      transition: transform 0.3s ease-out;
      margin-left: 8px;
    }

    /* Поворот стрелки для dropbtn */
    .dropdown:hover .dropbtn::after,
    .dropdown.open .dropbtn::after {
      transform: rotate(180deg);
    }

    /* Добавляем подчеркивание для dropbtn как у других ссылок */
    .dropbtn::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 45%;
      width: 0;
      height: 2px;
      background: #f4e6d1;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .dropdown:hover .dropbtn::before {
      width: 80%;
    }

    .dropdown:hover .dropbtn {
      color: #f4e6d1;
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    @media (min-width: 769px) {
      .dropdown-content {
        display: none;
        background: #85725B;
        position: absolute;
        border-radius: 20px;
        overflow: hidden;
      }
      
      .dropdown:hover .dropdown-content {
        display: block;
      }

      .dropdown-content a {
        padding: 10px 20px;
        text-align: left;
      }
    }

    @media (max-width: 768px) {
      .dropdown.mobile {
        background: none;
        padding: 10px 15px;
      }
      
      .dropdown.mobile .dropbtn {
        background: none;
        text-align: left;
        display: inline-flex;
        width: auto;
      }

      /* Стрелка в мобильной версии - вниз по умолчанию */
      .dropdown.mobile .dropbtn::after {
        transform: rotate(0deg);
      }

      /* Стрелка в мобильной версии - вверх при открытии */
      .dropdown.mobile.open .dropbtn::after {
        transform: rotate(180deg);
      }
      
      .dropdown.mobile.open {
        background: #8b7355;
        width: 100%;
        border-radius: 10px;
        text-align: left;
      }
      
      .dropdown.mobile.open .dropbtn {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: left;
      }
      
      .dropdown.mobile .dropdown-content {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        height: 0;
        overflow: hidden;
        pointer-events: none;
        margin: 0;
        padding: 0;
        max-height: 0;
      }
      
      .dropdown.mobile.open .dropdown-content {
        position: static;
        visibility: visible;
        opacity: 1;
        height: auto;
        pointer-events: auto;
        background: #85725B;
        display: block;
        max-height: none;
      }

      .dropdown.mobile.open .dropdown-content a {
        display: block;
        padding: 10px 20px;
        text-align: left;
        transition: background-color 0.3s;
      }

      .dropdown.mobile.open .dropdown-content a:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  `
};

function Header() {
  const dropdownRef = useRef(null);
  const [isNavActive, setIsNavActive] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Close the mobile menu when the route changes
    setIsNavActive(false);
    setDropdownOpen(false);
  }, [location]);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  // Function to handle dropdown on mobile and desktop differently
  const toggleDropdown = () => {
    if (isMobile) {
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
      <style>{styles.dropdownStyles}</style>
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
          
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
            <span className="dropbtn" onClick={toggleDropdown}>Menu</span>
            <div
              className="dropdown-content"
              ref={dropdownRef}
              style={isMobile ? { maxHeight: isDropdownOpen ? `${dropdownRef.current.scrollHeight}px` : '0' } : {}}
            >
              <Link to="/breakfast" onClick={() => setDropdownOpen(false)}>Breakfast</Link>
              <Link to="/burgers" onClick={() => setDropdownOpen(false)}>Burgers</Link>
              <Link to="/bakery" onClick={() => setDropdownOpen(false)}>Hot Bakery</Link>
              <Link to="/mains" onClick={() => setDropdownOpen(false)}>Mains</Link>
              <Link to="/drinks" onClick={() => setDropdownOpen(false)}>Drinks</Link>
              <Link to="/dessert" onClick={() => setDropdownOpen(false)}>Desserts</Link>
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