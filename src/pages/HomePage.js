import React, { useState } from 'react';
import MenuPopup from '../components/MenuPopup';
import AnimatedPage from '../components/Home_Animation';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = (e) => {
    if (e) e.preventDefault();
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  

  return (
    
    <AnimatedPage>
      {isMenuOpen && <MenuPopup onClose={closeMenu} />}

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="logo">Welcome to The Corner House</h1>
            <p>A family-run cafe serving delicious breakfast and comfort food in the heart of Southend-on-Sea for over 22 years</p>
            <button className="cta-button" onClick={openMenu}>View Our Menu</button>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>The Corner House Cafe has been a beloved independent, family-run establishment in Southend-on-Sea for over two decades. Since opening our doors, we've been committed to serving hearty, homemade meals in a warm and welcoming atmosphere.</p>
              <p>We pride ourselves on our extensive breakfast menu, featuring traditional full English breakfasts alongside creative options like homemade Yorkshire puddings with breakfast fillings, fluffy pancakes, and freshly baked muffins.</p>
              <p>Whether you're starting your day with us or stopping by for lunch, our friendly team is here to make your visit memorable with quality food and genuine hospitality.</p>
            </div>
            <div className="about-image">
              <img src="/images/main2.png" alt="Cozy cafe interior with people" />
            </div>
          </div>
        </div>
      </section>

      <section className="menu-preview" id="menu-preview">
        <div className="container">
          <h2>Our Specialties</h2>
          <div className="menu-grid">
            <div className="menu-card">
              <img src="/images/full.png" alt="Full English Breakfast" />
              <div className="menu-card-content">
                <h3>Full English Breakfast</h3>
                <p>Two sausages, two rashers of bacon, fried egg, beans, tomatoes, mushrooms, and your choice of bread with tea or coffee included.</p>
                <div className="price">£9.95</div>
              </div>
            </div>
            <div className="menu-card">
              <img src="/images/cofe3.png" alt="Freshly brewed coffee" />
              <div className="menu-card-content">
                <h3>Fresh Coffee & Pastries</h3>
                <p>Start your day with our perfectly brewed coffee and selection of freshly baked muffins, croissants, and pastries.</p>
                <div className="price">From £2.50</div>
              </div>
            </div>
            <div className="menu-card">
              <img src="/images/cake.jpg" alt="Homemade Cakes" />
              <div className="menu-card-content">
                <h3>Homemade Cakes</h3>
                <p>Nice Homemade Cakes freshly baked each-day-different: cheesecakes, chocolate, carrot for the best taste to your coffee.</p>
                <div className="price">From £8.50</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="container">
          <h2>Taste the Difference</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Pancakes with syrup" />
            </div>
            <div className="gallery-item">
              <img src="/images/full.png" alt="Another full English breakfast" />
            </div>
            <div className="gallery-item">
              <img src="/images/cake2.jpg" alt="A slice of cake on a plate" />
            </div>
            <div className="gallery-item">
              <img src="/images/chocolate.jpg" alt="Coffee with latte art" />
            </div>
            <div className="gallery-item">
              <img src="/images/milkshake2.jpg" alt="A tasty milkshake" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Fresh salad" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Toasted sandwich" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Milkshake" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <h2>Visit Us Today</h2>
            <div className="contact-info">
              <h3>Location & Contact</h3>
              <p><strong>Address:</strong> 39 Southchurch Rd, Southend-on-Sea SS1 2NG</p>
              <p><strong>Phone:</strong> 01702602302 - Available for Deliveries and Bookings!</p>
              <p><strong>Email:</strong> info@cornerhousecafe.co.uk</p>
              <p>We serve breakfast all day and offer both eat-in and takeaway options. Our kids menu and colouring pages make us perfect for families too!</p>
            </div>
            <div className="opening-hours">
              <h3>Opening Hours</h3>
              <ul className="hours-list">
                <li><span>Monday</span><span>7:00 AM - 3:00 PM</span></li>
                <li><span>Tuesday</span><span>7:00 AM - 3:00 PM</span></li>
                <li><span>Wednesday</span><span>7:00 AM - 3:00 PM</span></li>
                <li><span>Thursday</span><span>7:00 AM - 3:00 PM</span></li>
                <li><span>Friday</span><span>7:00 AM - 3:00 PM</span></li>
                <li><span>Saturday</span><span>7:00 AM - 3:00 PM</span></li>
                <li><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <button id="floatingMenuButton" className="floating-menu-button" onClick={openMenu}>
        Full Menu
      </button>
    </AnimatedPage>
    
    
  );
  
}

export default HomePage;