import React, { useEffect, useState } from "react";
import Header from "./Navebar/Header";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const UpdateProduct = (props) => {
  // console.log("props", props.match.params.id)

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch(
      "http://127.0.0.1:8000/api/products/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
    setName(result.name);
    setFile(result.file_path);
    setPrice(result.price);
    setDescription(result.description);
  }, []);
  // console.log(data);

  const editProduct = async (id) => {
    const formData = new FormData;
    // ..........("name in API", name in state).......
    formData.append("img", file)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("description", description)
    let result = await fetch('http://127.0.0.1:8000/api/products/'+id+'?_method=PUT',{
        method: 'POST',
        body: formData
    });
    alert("Data has Been Updated");
  };

  return (
    <div>
      <Header />
      <h1>UpdateProduct</h1> <br /> <br />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        defaultValue={data.name}
      />{" "}
      <br /> <br />
      <input
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        defaultValue={data.price}
      />{" "}
      <br /> <br />
      <textarea
        type="text"
        rows="4"
        cols="50"
        defaultValue={data.description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /> <br />
      <input
        type="file"
        defaultValue={data.file_path}
        onChange={(e) => setFile(e.target.files[0])}
      />{" "}
      <br /> <br />
      <img
        style={{ width: 52 }}
        src={"http://127.0.0.1:8000/" + data.file_path}
      />
      <br /> <br />
      <button
        onClick={() => {
          editProduct(data.id);
        }}
      >
        Update
      </button>
    </div>
  );
};
export default withRouter(UpdateProduct);
