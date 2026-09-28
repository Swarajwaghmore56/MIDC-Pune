import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/Sidebartoggle";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Infrastructure from "./pages/Infrastructure";
import Quality from "./pages/Quality";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>

      <Sidebar
        isOpen={isOpen}
      />

      <SidebarToggle
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <main
        className={`main-content ${isOpen ? "content-open" : ""
          }`}
      >

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/infrastructure"
            element={<Infrastructure />}
          />

          <Route
            path="/quality"
            element={<Quality />}
          />

          <Route
            path="/industries"
            element={<Industries />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

    </BrowserRouter>
  );
}

export default App;