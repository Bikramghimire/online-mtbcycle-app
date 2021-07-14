import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardBike from "./components/CardBike/CardBike";
import Navbar from "./components/Navbar/Navbar";
import ShowCase from "./components/ShowCase/ShowCase";

import { storage, db } from "./FirebaseConfig";

function App() {
  const [bikes, setBikes] = useState([]);
  const fetchBikes = () => {
    const ref = db.collection("Bikes");
    console.log(ref);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setBikes(items);
    });
  };
  useEffect(() => fetchBikes(), []);
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/detail">
            <CardBike />
          </Route>
          <Route path="/" exect>
            <ShowCase bikes={bikes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
