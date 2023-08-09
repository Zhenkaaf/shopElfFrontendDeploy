import "./App.css";
import Menu from "./components/menu/Menu";
import Checkout from "./pages/checkout/Checkout";
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
            path="checkout"
            element={<Checkout />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
