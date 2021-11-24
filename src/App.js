import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
// import Product from "./components/Product";
import {
  Home,
  Products,
  Singleproduct,
  About,
  Cart,
  PrivateRout,
  Error,
  Checkout,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route
            exact
            path="/products/:id"
            children={<Singleproduct />}
          ></Route>
          <PrivateRout exact path="/checkout">
            <Checkout />
          </PrivateRout>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
