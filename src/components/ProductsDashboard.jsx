import './productsDashboard.css'
import React, { useEffect, useState } from "react";
import axios from 'axios'
export const Products = () => {
  // to get all products list on component mounts
  const [product,productData]=useState([])
  useEffect(() => {
    axios.get('https://movie-fake-server.herokuapp.com/products').then((response)=>{
                productData(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    // dispatch(getproductsData())
  }, []);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {
          product.map((items)=> <div className="product">
           <img src={items.image}/>
           <div className="product-name">{items.title}</div>
           <div className="product-brand">{items.brand}</div>
           <div className="product-price">{items.price}</div>

          </div>

          )
        }
        {/* map throught th products  list and display the results */}
        {/* {data && */}
          {/* data.map(() => { */}
            {/* return <div>display the results here</div>; */}
          {/* })} 