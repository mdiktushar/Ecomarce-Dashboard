import React, { useState } from "react";
import Header from "./Navebar/Header";
import { Table } from "react-bootstrap";

const SearchProduct = () => {
  const [data, setData] = useState([]);

  const search = async (key) => {
    let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
    result = await result.json();
    console.log(result);
    setData(result);
  };

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Component</h1> <br /> <br />
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          className="form-control"
          placeholder="Search Product"
        />
        {data.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img
                      style={{ width: 140 }}
                      src={"http://127.0.0.1:8000/" + item.file_path}
                      class="img-fluid"
                      alt={item.name}
                    />
                  </td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : <><br /><h2>Search Product</h2></> }
      </div>
    </div>
  );
};
export default SearchProduct;
