import "./App.css";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/hogsmeade-pizza" element={<Home />} />
        <Route path="/hogsmeade-pizza/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
