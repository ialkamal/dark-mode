import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useDarkMode from "./hooks/useDarkMode";
import usePrefersDarkMode from "./hooks/usePrefersDarkMode";

import "./styles.scss";
import Details from "./components/Details";

const App = () => {
  const [prefersDarkMode] = usePrefersDarkMode();
  const [darkMode, setDarkMode] = useDarkMode(prefersDarkMode);
  const [coinData, setCoinData] = useState([]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setDarkMode(prefersDarkMode);
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Route exact path="/">
        <Charts coinData={coinData} />
      </Route>
      <Route exact path="/details">
        <Details />
      </Route>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
