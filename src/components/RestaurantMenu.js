import React from "react";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
// import {useRestaurantMenu} from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId); 

  if (!resInfo) return <div>Loading...</div>;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const {itemCards=[]}=
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  
  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{cuisines.join(",")}- {costForTwoMessage}</h4>
      
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{" Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
