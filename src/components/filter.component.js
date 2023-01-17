import { Button, ButtonBase, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext, ProductContext } from "../App";
import CartIcon from "./cart_icon.component";
import Select from "react-select";

const Filter = ({
  cart_count,
  product_count,
  onGotoCartClick,
  categories,
  onSelect,
  onClear,
  isCleared
  
  
}) => {
  const { cart } = useContext(CartContext);

  return (
    <div
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "#09134D",
        borderBottom: "1px solid #39E062",
        position: "fixed",
        zIndex: 999,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography style={{ color: "#fff" }}>
          Viewing Products : {product_count} |
        </Typography>

        {cart.items.length > 0 ? (
          <ButtonBase onClick={onGotoCartClick}>
            <Typography style={{ color: "#fff", marginLeft: 10 }}>
              Go to Cart
            </Typography>
            <CartIcon count={cart_count} />
          </ButtonBase>
        ) : (
          <>
            <Typography style={{ color: "#fff", marginLeft: 10 }}>
              Start Adding to Cart |
            </Typography>
          </>
        )}
        <div style={{ marginLeft: 20, minWidth: 180 }}>
          <Select
            options={categories}
            placeholder="Search Categories"
            onChange={onSelect}
          />
        </div>
        {
          !isCleared ? (<Button onClick={onClear} size="small">
          Clear Category Selection
        </Button>):null
        }
        
      </Grid>
    </div>
  );
};

export default Filter;
