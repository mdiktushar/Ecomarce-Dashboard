import React from 'react'
import Header from "./Navebar/Header";

const SearchProduct = () => {
    return (
        <div>
          <Header />
          <div className='col-sm-6 offset-sm-3'>
              <h1>Search Component</h1> <br /> <br />
          <input type="text" name="" id="" className='form-control' placeholder='Search Product'/>
          </div>
          
        </div>
    )
}
export default SearchProduct;