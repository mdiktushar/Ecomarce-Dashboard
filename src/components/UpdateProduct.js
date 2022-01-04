import React, { useEffect, useState } from "react";
import Header from "./Navebar/Header";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const UpdateProduct = (props) => {
  // console.log("props", props.match.params.id)

  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch(
      "http://127.0.0.1:8000/api/products/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
  }, []);
  console.log(data);
  return (
    <div>
      <Header />
      <h1>UpdateProduct</h1> <br /> <br />
      <input type="text" defaultValue={data.name} /> <br /> <br />
      <input type="text" defaultValue={data.price} /> <br /> <br />
      <textarea
        type="text"
        rows="4"
        cols="50"
        defaultValue={data.description}
      />{" "}
      <br /> <br />
      <input type="file" defaultValue={data.file_path} /> <br /> <br />
      <img
        style={{ width: 52 }}
        src={"http://127.0.0.1:8000/" + data.file_path}
        alt=""
        srcset=""
      />{" "}
      <br /> <br />
      <button>Update</button>
    </div>
  );
};
export default withRouter(UpdateProduct);
