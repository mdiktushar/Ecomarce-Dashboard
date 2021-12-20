import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/add">
          <Protected Cmp = {AddProduct}/>
        </Route>
        <Route path="/update">
        <Protected Cmp = {UpdateProduct}/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Register />
        </Route>
      </Router>
    </div>
  );
}

export default App;
