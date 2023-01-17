import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header.component";
import {
  CartContext,
  CurrentProduct,
  ProductContext,
  UserContext,
} from "../App";
import Footer from "../components/footer.component";

import { Button, Grid, Typography } from "@mui/material";

import CommonCard from "../components/card.component";
import Filter from "../components/filter.component";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const [limit, setlimit] = useState(10);
  const [skip, setskip] = useState(10);
  const { products, setproducts } = useContext(ProductContext);
  const { current_product, setcurrent_product } = useContext(CurrentProduct);
  const [filtered_products, setfiltered_products] = useState([]);
  const [selected_category, setselected_category] = useState("");

  const navigate = useNavigate();

  const [p_cats, setp_cats] = useState([]);

  

  const width = window.innerWidth;
  console.log(width);

  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const [loading, setloading] = useState(true);

  const fetchMore = () => {
    setlimit(limit + 10);
    setskip(skip + 10);
  };

  const filterProductsByCategory = (category) => {
    setselected_category(category);
    let temp = products?.allProducts.filter((i) => {
      return i.category === category;
    });

    console.log("Filtered", temp);
    setfiltered_products(temp);
  };
  const getCategoryData = async () => {
    {
      await fetch("https://dummyjson.com/auth/products/categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken.token,
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          let temp = [{ label: "", value: "" }];

          data.map((i) => {
            temp.push({ label: i, value: i });
          });
          // setproducts({ categories: temp });
          setp_cats(temp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const getData = async () => {
    {
      await fetch(
        "https://dummyjson.com/auth/products?limit=" + limit + "&skip=" + 0,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken.token,
          },
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data.products);
          setproducts({ allProducts: data.products });
          setloading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getData();
  }, [user, limit, skip]);

  useEffect(() => {
    console.log("Product", products);
  }, [products]);

  const addItemtoCart = (product) => {
    let temp = [...cart.items];
    temp.push(product);
    setCart({
      items: temp,
    });
  };

  useEffect(() => {
    console.log("here", products.categories);
  }, [products.categories]);

  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#09134D",
      }}
    >
      <Header />
      <Filter
        isHome
        cart_count={cart?.items?.length}
        product_count={products?.allProducts?.length}
        onGotoCartClick={() => navigate("/cart")}
        categories={p_cats}
        onSelect={(e) => filterProductsByCategory(e.label)}
        onClear={() => setselected_category("")}
        isCleared={selected_category!=='' ? false : true}
      />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Grid container spacing={3} marginBottom={10}>
            {selected_category !== "" ? (
              <>
                {filtered_products.map((i) => (
                  <Grid item xs={3}>
                    <CommonCard
                      key={i.id}
                      id={i.id}
                      title={i.title}
                      category={i.category}
                      description={i.description}
                      thumbnail={i.thumbnail}
                      price={i.price}
                      onCartClick={() => addItemtoCart(i)}
                      onViewClick={() => {
                        setcurrent_product(i);
                        setTimeout(() => {
                          navigate("/product/" + i.id);
                        }, 800);
                      }}
                    />
                  </Grid>
                ))}
              </>
            ) : (
              <>
                {products?.allProducts?.map((i) => (
                  <Grid item xs={3}>
                    <CommonCard
                      key={i.id}
                      id={i.id}
                      title={i.title}
                      category={i.category}
                      description={i.description}
                      thumbnail={i.thumbnail}
                      price={i.price}
                      onCartClick={() => addItemtoCart(i)}
                      onViewClick={() => {
                        setcurrent_product(i);
                        setTimeout(() => {
                          navigate("/product/" + i.id);
                        }, 800);
                      }}
                    />
                  </Grid>
                ))}
              </>
            )}
            {/* {products?.allProducts?.map((i) => (
              <Grid item xs={3}>
                <CommonCard
                  key={i.id}
                  id={i.id}
                  title={i.title}
                  category={i.category}
                  description={i.description}
                  thumbnail={i.thumbnail}
                  price={i.price}
                  onCartClick={() => addItemtoCart(i)}
                  onViewClick={() => {
                    setcurrent_product(i);
                    setTimeout(() => {
                      navigate("/product/" + i.id);
                    }, 800);
                  }}
                />
              </Grid>
            ))} */}
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 5 }}
            onClick={fetchMore}
            style={{ backgroundColor: "#39E062", padding: 20 }}
          >
            I want to see more products
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
