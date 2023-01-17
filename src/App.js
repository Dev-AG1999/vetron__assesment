import { createContext, useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home.page";

import SigninPage from "./pages/signin.page";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProtectedRoutes from "./utils/protected_routes.util";
import Cart from "./components/cart.component";
import SingleProduct from "./components/product.component";
import Signup from "./components/signup.component";

export const UserContext = createContext();
export const ProductContext = createContext();
export const CartContext = createContext();
export const CurrentProduct = createContext();



function App() {
  const [user, setUser] = useState({
    loggedIn: false,
    data: null,
  });
  const [products, setproducts] = useState({
    allProducts: [],
    categories: [],
  });
  const [cart, setCart] = useState({
    items: [],
  });



  const [current_product, setcurrent_product] = useState({
    title: "",
    images: [],
    brand: "",
    description: "",
    category: "",
    price: 0,
    rating: 0,
  });

  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <CurrentProduct.Provider
          value={{ current_product, setcurrent_product }}
        >
          <ProductContext.Provider value={{ products, setproducts }}>
            <div className="App">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<SigninPage />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route element={<ProtectedRoutes />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </div>
          </ProductContext.Provider>
        </CurrentProduct.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
