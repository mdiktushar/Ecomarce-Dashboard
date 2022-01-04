import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Protected from "./components/Protected";
import ProductList from "./components/ProductList";
import SearchProduct from "./components/SearchProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add">
            <Protected Cmp={AddProduct} />
          </Route>
          <Route path="/update/:id">
            <Protected Cmp={UpdateProduct} />
          </Route>
          <Route path="/search">
            <Protected Cmp={SearchProduct} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Register />
          </Route>
          <Route path="/">
            <Protected Cmp={ProductList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
