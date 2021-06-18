import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemInfo from "./components/ItemInfo";

function App() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const res = await axios.get("http://localhost:3001/");
        const store = res?.data?.products;
        setStore(store);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStore();
  }, []);
  console.log("app", store);

  const [cart, setCart] = useState([]);

  const handleAddCart = (product) => {
    setCart([...cart, product]);
  };
  console.log("cart ", cart);
  // pass cart to navbar and then to cart
  // handleCart pass down to inv items to change state

  return (
    <div className="App">
      <Navbar cart={cart} />
      <div className="main">
        <BrowserRouter>
          <Banner />
          <Routes>
            <Route path="/" element={<Products store={store} />} />
            <Route path="/:productId" element={<ItemInfo handleCart={handleAddCart} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
