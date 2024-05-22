import React from "react";
import ReactDOM from "react-dom/client";

/**Header
 *  - Logo
 *  - Nav Items
 * Body
 *   - Search
 *   - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of res, Star Rating, Cuisine, Delevry time
 * Footer
 *  - Copyright
 *  - Link
 *  - Address
 *  Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/CDG3tPS1HqvP7u8kJysYXIf-os4=/500x500/top/smart/99designs-contests-attachments/58/58659/attachment_58659944"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resName, cuisine }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/9/20877899/de5f43c7f33015846dcb43525c00e9ab_o2_featured_v2.jpg"
      ></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
