import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Context
import { ListProductsProvider } from "./context/ListProductsContext";
import { ListShopCartProvider } from "./context/ListShopCartContext";

//CSS
import "tailwindcss/tailwind.css"

//Componentes
import HeaderMain from "./view/Header/HeaderMain";

const Home = lazy(() => import("./view/Home/Home"));
const Products = lazy(() => import("./view/Products/Products"));
const CartShop = lazy(() => import("./view/CartShop/CartShop"));
const CheckOut = lazy(() => import("./view/CheckOut/CheckOut"));

const App = () => {

  return (
    <>
      <ListProductsProvider>
        <ListShopCartProvider>
          <Router>
            <HeaderMain>
              <Switch>
                
                <Route path="/" exact>
                  <Suspense fallback={"Loading..."}>
                    <Home />
                  </Suspense>
                </Route>

                <Route path="/Products" exact>
                  <Suspense fallback={"Loading..."}>
                    <Products />
                  </Suspense>
                </Route>

                <Route path="/CartShop" exact>
                  <Suspense fallback={"Loading..."}>
                    <CartShop />
                  </Suspense>
                </Route>

                <Route path="/CheckOut" exact>
                  <Suspense fallback={"Loading..."}>
                    <CheckOut />
                  </Suspense>
                </Route>

                <Route path="*">
                  <p>ERROR 404 Not Found</p>
                </Route>
                  
              </Switch>
            </HeaderMain>
          </Router>
        </ListShopCartProvider>
      </ListProductsProvider>
    </>
  );
}

export default App;
