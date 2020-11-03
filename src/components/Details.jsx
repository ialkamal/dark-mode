import React, { useState, useEffect } from "react";
import axios from "axios";

function Details() {
  const [coinsList, setCoinsList] = useState([]);
  const [coin, setCoin] = useState("");
  const [coinDetails, setCoinDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/list")
      .then((res) => {
        const list = res.data.filter((coin) => {
          return coin.name.toLowerCase().includes("ethereum");
        });
        setCoinsList(list);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (coin !== "")
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1&interval=Hourly`
        )
        .then((res) => setCoinDetails(res.data))
        .catch((err) => console.log(err));
    console.log("Coin: ", coin);
  }, [coin]);

  const handleChanges = (e) => {
    setCoin(e.target.value);
  };

  return (
    <div>
      <select
        name="coins"
        style={{ marginTop: "20px" }}
        value={coin}
        onChange={handleChanges}
      >
        <option selected disabled value="">
          Select Coin...
        </option>
        {coinsList.map((coin) => {
          return (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          );
        })}
      </select>
      <pre>{JSON.stringify(coinDetails, null, 2)}</pre>
    </div>
  );
}

export default Details;
