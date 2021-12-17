import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <h1>Tushar</h1>

        <Route path="/add">
          <AddProduct />
        </Route>
        <Route path="/update">
          <UpdateProduct />
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
