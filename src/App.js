import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";

import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Home} />
        <Route path="/sign-up" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
