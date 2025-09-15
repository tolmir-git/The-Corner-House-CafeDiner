import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const styles = {
  dropdownStyles: `
    /* ... all your other styles are fine ... */

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

    /* ... other styles ... */

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

    /* THE ENTIRE @media (max-width: 768px) BLOCK HAS BEEN DELETED FROM HERE */
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