import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditOrder = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    customerName: "",
    address: "",
    phoneNumber: "",
    foodItem: "",
    quantity: 1,
    deliveryStatus: "pending",
    paymentMethod: "cash",
    specialInstructions: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://food-delivery-api.com/orders/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        if (res.data) {
          setForm(res.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://food-delivery-api.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          alert("Order updated successfully!");
          navigate("/orders");
        } else {
          alert("Failed to update order.");
        }
      })
      .catch((error) => {
        console.error("Error updating order:", error);
        alert("An error occurred while updating the order.");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">Edit Order</h1>
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="customerName" className="form-label">Customer Name:</label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              value={form.customerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address:</label>
            <textarea
              id="address"
              className="form-control"
              value={form.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="foodItem" className="form-label">Food Item:</label>
            <input
              type="text"
              className="form-control"
              id="foodItem"
              value={form.foodItem}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={form.quantity}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="deliveryStatus" className="form-label">Delivery Status:</label>
            <select
              id="deliveryStatus"
              className="form-control"
              value={form.deliveryStatus}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="in-transit">In Transit</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">Payment Method:</label>
            <select
              id="paymentMethod"
              className="form-control"
              value={form.paymentMethod}
              onChange={handleChange}
            >
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="online">Online Payment</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="specialInstructions" className="form-label">Special Instructions:</label>
            <textarea
              id="specialInstructions"
              className="form-control"
              value={form.specialInstructions}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="text-center">
            <button className="btn btn-primary" type="submit">Update Order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;
