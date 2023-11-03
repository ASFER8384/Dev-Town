import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation/Nav";
import Products from "./pages/Products/Products";
import products from "./db/data";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";
import Home from "./pages/Home/Home.js";
import Contact from "./components/Contact/Contact";



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };



  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, newPrice, desc }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          newPrice={newPrice}
          desc={desc}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <BrowserRouter>
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            } />
          <Route
            path="products"
            element={
              <div className="sidebar-product">
                <Sidebar handleChange={handleChange} selectedCategory={selectedCategory} />
                <Products result={result} />
              </div>
            }
          />
        </Routes>
        <Contact/>
      </BrowserRouter>
    </>
  );
}

export default App;
