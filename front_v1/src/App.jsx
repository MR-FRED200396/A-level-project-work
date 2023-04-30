import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import CssBaseline from "@mui/material/CssBaseline";

import { Main } from "./pages/Main";
import { Categories } from "./pages/Categories";
import { Products } from "./pages/Products";
import { Currency } from "./pages/Currency";

import { Header } from "./components/Header/Header";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";

import { ROUTES } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <ShoppingCart />
      <Routes>
        <Route path={ROUTES.main} element={<Main />} />
        <Route path={ROUTES.categories} element={<Categories />} />
        <Route path={ROUTES.products} element={<Products />} />
        <Route path={ROUTES.currency} element={<Currency />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
