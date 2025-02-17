import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./order.css";

const FoodOrder = () => {
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState({
        customerName: "",
        foodItem: "",
        quantity: 1,
        deliveryAddress: "",
        contactNumber: "",
        paymentMethod: "",
        specialInstructions: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setOrderData({
            ...orderData,
            [id]: value,
        });
    };

    const api_url = "https://food-delivery-api.example.com/order";

    const handleSubmit = async () => {
        try {
            const response = await fetch(api_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });
            if (response.ok) {
                alert("Order placed successfully!");
                navigate("/home");
            } else {
                alert("Failed to place order. Try again!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container mt-3">
            <h1 className="text-center mb-4">Food Delivery Order Form</h1>
            <div className="card p-4">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                        <label htmlFor="customerName" className="form-label">Customer Name:</label>
                        <input
                            type="text"
                            id="customerName"
                            className="form-control"
                            value={orderData.customerName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="foodItem" className="form-label">Food Item:</label>
                        <input
                            type="text"
                            id="foodItem"
                            className="form-control"
                            value={orderData.foodItem}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            className="form-control"
                            value={orderData.quantity}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="deliveryAddress" className="form-label">Delivery Address:</label>
                        <textarea
                            id="deliveryAddress"
                            className="form-control"
                            value={orderData.deliveryAddress}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
                        <input
                            type="text"
                            id="contactNumber"
                            className="form-control"
                            value={orderData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="paymentMethod" className="form-label">Payment Method:</label>
                        <select
                            id="paymentMethod"
                            className="form-control"
                            value={orderData.paymentMethod}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select payment method</option>
                            <option value="cash">Cash on Delivery</option>
                            <option value="credit-card">Credit Card</option>
                            <option value="debit-card">Debit Card</option>
                            <option value="upi">UPI Payment</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="specialInstructions" className="form-label">Special Instructions:</label>
                        <textarea
                            id="specialInstructions"
                            className="form-control"
                            value={orderData.specialInstructions}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary" onClick={handleSubmit}>Place Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FoodOrder;
