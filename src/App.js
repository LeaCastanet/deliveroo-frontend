import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Description from "./components/Description";
import Sections from "./components/Sections";
import Basket from "./components/Basket";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <>
      <Header />
      <div className="container">
        <Description data={data} />
        <div className="basketEtSections">
          <Sections data={data} basket={basket} setBasket={setBasket} />
          <Basket basket={basket} />
        </div>
      </div>
    </>
  );
};

export default App;
