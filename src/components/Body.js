import React, { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const SWIGGY_API_URL =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      
      // Use a CORS proxy
      const PROXY_URL = `https://corsproxy.io/?${encodeURIComponent(
        SWIGGY_API_URL
      )}`;

      try {
        const data = await fetch(PROXY_URL);
        const json = await data.json();

        const restaurants =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array → runs once on mount

  return (
    <div className="body">
      <h2>Restaurants Near You</h2>
      <div className="shimmer-container">
        {filteredRestaurants.length === 0 ? (
          <p>Loading...</p>
        ) : (
          filteredRestaurants.map((res) => (
            <div key={res?.info?.id} className="res-card">
              <img
                className="res-logo"
                src={`https://res.cloudinary.com/swiggy/image/upload/${res?.info?.cloudinaryImageId}`}
                alt={res?.info?.name}
              />
              <h3>{res?.info?.name}</h3>
              <p>{res?.info?.cuisines?.join(", ")}</p>
              <p>{res?.info?.avgRating} ⭐</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
