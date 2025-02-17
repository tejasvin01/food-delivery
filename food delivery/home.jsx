import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const API_URL = "https://your-api-endpoint.com/foods"; // Replace with your API

const Home = () => {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-4">Delicious Food Menu</h1>

      {foods.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center">
          {foods.map((food) => (
            <div key={food.id} className="card m-3" style={{ width: "18rem" }}>
              <img src={food.image} alt={food.name} className="card-img-top" />

              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">{food.description}</p>
                <p className="card-text"><strong>Price:</strong> ${food.price}</p>

                <button
                  onClick={() => navigate(`/food/${food.id}`)}
                  className="btn btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loader d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
