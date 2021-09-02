import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
//component
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { TemplateProvider } from "./templates/TempletProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/product/DetailView";
import { Box } from "@material-ui/core";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:id" component={DetailView} />
            </switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
