import React, { useState } from "react";
import Header from "./Navebar/Header";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProduct = async() => {
    const formData = new FormData;
    // ..........("name in API", name in state).......
    formData.append("img", file)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("description", description)
    let result = await fetch('http://127.0.0.1:8000/api/products',{
        method: 'POST',
        body: formData
    });
    alert("Data has Been Saved");
  };

  return (
    <div>
      <Header />
      <div className="col-sm-4 offset-sm-4">
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="file"
          className="form-control"
          placeholder="file"
          onChange={(e) => setFile(e.target.files[0])}
        />{" "}
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        <textarea
          className="form-control"
          rows="4"
          cols="50"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>{" "}
        <br />
        <button className="btn btn-primary" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
