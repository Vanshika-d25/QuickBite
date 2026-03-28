const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resData", resData);
    // const {name: resData.info.name , cuisines: resData.info.cuisines, deliveryTime: resData.info.deliveryTime, costForTwo: resData.info.costForTwo , cloudinaryImageId: resData.info.cloudinaryImageId};

  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info || {};

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* console.log(cloudinaryImageId) ; */}
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>Rs.{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

//Higher order component

export const withPromotedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
