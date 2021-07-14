import React from "react";
import { useLocation, useParams } from "react-router-dom";

const CardBike = () => {
  return (
    <div>
      <p>{location.state.data.name}</p>
    </div>
  );
};

export default CardBike;
