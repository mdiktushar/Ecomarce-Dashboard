import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Protected from "./components/Protected";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add">
            <Protected Cmp={AddProduct} />
          </Route>
          <Route path="/update">
            <Protected Cmp={UpdateProduct} />
          </Route>
          <Route path="/">
            <Protected Cmp={ProductList} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
