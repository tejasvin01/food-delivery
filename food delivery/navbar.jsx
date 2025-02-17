import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaHome, FaUtensils, FaShoppingCart, FaClipboardList, FaUserCircle } from 'react-icons/fa';
import './navbar.css';

function FoodDeliveryNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to style active links
  const getNavLinkStyle = (path) => {
    return location.pathname === path
      ? { textDecoration: 'underline', color: '#fff' }
      : { color: '#bbb' };
  };

  return (
    <Navbar bg="danger" expand="sm" variant="dark" className="custom-navbar">
      <Navbar.Brand className="txt">FoodieExpress</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link onClick={() => navigate('/home')} style={getNavLinkStyle('/home')}>
              <FaHome /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate('/menu')} style={getNavLinkStyle('/menu')}>
              <FaUtensils /> Menu
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate('/orders')} style={getNavLinkStyle('/orders')}>
              <FaClipboardList /> Orders
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate('/cart')} style={getNavLinkStyle('/cart')}>
              <FaShoppingCart /> Cart
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate('/profile')} style={getNavLinkStyle('/profile')}>
              <FaUserCircle /> Profile
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FoodDeliveryNavbar;
