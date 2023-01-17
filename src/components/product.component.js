import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useContext } from "react";

import Footer from "./footer.component";
import { useNavigate } from "react-router-dom";

import "../components/style.css";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./header.component";
import { CurrentProduct } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  header: {
    padding: "0",
  },
  titile: {
    margin: "10",
  },
}));
const SingleProduct = () => {
  const classes = useStyles();

  const { current_product } = useContext(CurrentProduct);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F5F2EF",
      }}
    >
      <Header />
      <Carousel
        className={classes.root}
        style={{ width: "100%", marginTop: 20 }}
      >
        {current_product.images.length > 0 &&
          current_product.images.map((i) => (
            <div style={{ height: "200px" }}>
              <img className="carousel_Image" src={i} />
              <p className="legend">{current_product.title}</p>
            </div>
          ))}
      </Carousel>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "90%",
        }}
        className="product_Des"
      >
        <h3>{current_product.title}</h3>
        <h3>{current_product.brand}</h3>
        <p>"{current_product.description}</p>
        <h3>₹{current_product.price}</h3>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
