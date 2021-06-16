import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Product />
      </div>
    </div>
  );
}

export default App;
