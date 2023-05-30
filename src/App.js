import "./App.css";
import Menu from "./components/menu/Menu";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import { Outlet, Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="cart"
            element={<Cart />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
