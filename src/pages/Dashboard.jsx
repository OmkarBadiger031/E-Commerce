import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let username = localStorage.getItem("username")

  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    console.log("Dashboard Loaded")

    axios.get("http://localhost:3000/products")
      .then((x) => {
        console.log("Products from API:", x.data)
        setProducts(x.data)
      })
      .catch((err) => {
        console.log("API Error:", err)
      })
  }, [])

  console.log("Current Products State:", products)

  function handleProduct(id) {
    navigate(`/productDetails/${id}`)
  }

  return (
    <>
      <Navbar />

      <center>
        <h1>Welcome, {username}</h1>
      </center>

      <div className="product-container">
        {products.map((x) => {
          return (
            <div className="product-card" key={x.product_id}>
              <img
                src={x.product_image}
                alt=""
              />

              <h3>{x.product_name}</h3>

              <button
                id="View-btn"
                onClick={() => handleProduct(x.product_id)}
              >
                View
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Dashboard