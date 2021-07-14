import React from "react";
import { useHistory } from "react-router-dom";
import "../ShowCase/ShowCase.css";
const ShowCase = ({ bikes }) => {
  let history = useHistory();
  console.log(bikes);
  const handleRoute = (data) => {
    history.push({ pathname: "/detail", state: data });
  };

  return (
    <div className="showcase">
      {bikes && bikes.length > 0
        ? bikes.map((bike) => (
            <div class="bike-card" onClick={() => handleRoute(bike)}>
              <img src={bike.img} alt={bike.name} style={{ width: "100%" }} />
              <div class="container">
                <h4>
                  <b>{bike.name}</b>
                </h4>
                <p>{bike.price}</p>
              </div>
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default ShowCase;
