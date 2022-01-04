import React, { useState, useEffect } from "react";
import Header from "./Navebar/Header";
import { Table } from "react-bootstrap";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect( () => {
    getData()
  }, []);

  const deleteOperation = async(id) => {
    let result = await fetch("http://127.0.0.1:8000/api/products/"+id, {
      method: 'DELETE'
    })
    result = await result.json()
    console.log(result)
    getData()
  };

  const getData = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/products");
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      <Header />
      <h1>Product List</h1>
      <div className="col-sm-6 offset-sm-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Operations</th>
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
                <td>
                  <span
                    onClick={
                      ()=>{deleteOperation(item.id)}
                    }
                    className="delete"
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default ProductList;
