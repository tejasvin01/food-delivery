import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./order.css";

const api_url = "https://food-delivery.onrender.com/orders";

const FoodOrder = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setOrders(data.orders || data))
      .catch((error) => console.error("Error fetching orders: ", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`${api_url}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
      })
      .catch((error) => console.error("Error deleting order: ", error));
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Food Delivery Orders</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Food Item</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Delivery Address</th>
            <th>Order Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.foodItem}</td>
              <td>{order.quantity}</td>
              <td>${order.totalPrice}</td>
              <td>{order.deliveryAddress}</td>
              <td>{order.status}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => navigate(`/editorder/${order.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodOrder;
