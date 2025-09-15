import React, { useState, useEffect } from 'react';

function MenuPopup({ onClose }) {
  const [isBreakfastZoomed, setBreakfastZoomed] = useState(false);
  const [isMainsZoomed, setMainsZoomed] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const toggleBreakfastZoom = () => {
    setBreakfastZoomed(!isBreakfastZoomed);
  };

  const toggleMainsZoom = () => {
    setMainsZoomed(!isMainsZoomed);
  };

  return (
    <div className="menu-popup active" onClick={onClose}>
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-menu" onClick={onClose}>&times;</button>
        <h2>Our Full Menu</h2>
        
        {/* New container for side-by-side images */}
        <div className="menu-images-container">
          <div
            className="menu-image-frame"
            onClick={toggleBreakfastZoom}
            style={{ cursor: isBreakfastZoomed ? 'zoom-out' : 'zoom-in' }}
          >
            <img
              src="/images/menu-breakfast.jpg"
              alt="The Corner House Breakfast Menu"
              className={isBreakfastZoomed ? 'zoomed' : ''}
            />
          </div>
          <div
            className="menu-image-frame"
            onClick={toggleMainsZoom}
            style={{ cursor: isMainsZoomed ? 'zoom-out' : 'zoom-in' }}
          >
            <img
              src="/images/menu-main.jpg"
              alt="The Corner House Main Menu"
              className={isMainsZoomed ? 'zoomed' : ''}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default MenuPopup;