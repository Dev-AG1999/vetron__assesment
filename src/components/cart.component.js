import React, { useContext, useState } from "react";

import Footer from "./footer.component";
import { useNavigate } from "react-router-dom";
import Header from "./header.component";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { CartContext } from "../App";
import CartItem from "./cart_item.component";
import Filter from "./filter.component";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const [items, setItems] = useState(cart.items);



  //   cart remove handler
  const removeCart = (id) => {
    const newlist = items.filter((item) => item.id !== id);
    setItems(newlist);
    setCart({ items: newlist });
  };

  return (
    <div
      className="cartpage"
      style={{
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
        display: "flex",
        backgroundColor: "#09134D",
      }}
    >
      <Header />
      <div
        style={{
          height: 80,
          width: "100%",
          backgroundColor: "#09134D",
          marginBottom: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="h5" color="#fff">
          {" "}
          Your Cart |
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2, mr: 2 }}
          onClick={() => alert("Payment Succesful")}
          style={{ backgroundColor: "#39E062", padding: 20 }}
        >
          Proceed to Pay
        </Button>
      </div>
      <div
        className="cartitem_wrapper"
        style={{ overflowY: "scroll", height: "100%", marginBottom: 5 }}
      >
        {items.length > 0 &&
          items.map((data) => (
            <div
              key={data.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <CartItem
                onCartClick={() => removeCart(data.id)}
                title={data.title}
                thumbnail={data.thumbnail}
                description={data.description}
                brand={data.brand}
                price={data.price}
              />
            </div>
          ))}
        {items.length == 0 && <h1 style={{color:"#fff"}}>Add products to cart to view it here</h1>}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
