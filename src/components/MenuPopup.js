import React, { useState, useEffect } from 'react';

function MenuPopup({ onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);

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

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="menu-popup active" onClick={onClose}>
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-menu" onClick={onClose}>&times;</button>
        <h2>Our Full Menu</h2>
        <div
          className="menu-image-frame"
          id="menuImageFrame"
          onClick={toggleZoom}
          style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
        >
          <img
            src="/images/menu_corner.jpg"
            alt="The Corner House Full Menu"
            className={isZoomed ? 'zoomed' : ''}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuPopup;