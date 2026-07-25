import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [quantity, setQuantity] = useState(1)
  const navigate=useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((x) => {

        let result = x.data.find((item) => {
          return item.product_id == id
        })

        setProduct(result)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  function inc() {
    setQuantity(quantity + 1)
  }

  function dec() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  function placeOrder(e){
    e.preventDefault()
    let order = {
      customer_id:localStorage.getItem("userId"),
      customer_name:name,
      customer_email:email,
      customer_mobile:mobile,
      customer_address:address,
      product_id:product.product_id,
      product_anme:product.product_name,
      product_quantity:quantity,
      total:quantity*product.product_price,
      order_date:new Date().toLocaleDateString(),
      product_img:product.product_image
      
    }
    axios.post("http://localhost:3000/orders",order)
    .then(()=>{
      toast.success("Order placed")
      navigate("/success")
    })
    .catch(err=>toast.error("Failed to place"))
  }

  function handleorder(e) {
    e.preventDefault()

    alert("Order Placed Successfully")
  }

  return (
    <>
      <Navbar />

      <center>

        <h1>Product Details</h1>

        <br />
        <br />

        <img
          src={product.product_image}
          height="300px"
          width="300px"
          alt=""
        />

        <h2>{product.product_name}</h2>

        <h3>Price : ₹ {product.product_price}</h3>

        <h3>Category : {product.product_category}</h3>

        <h3>Rating : ⭐ {product.product_ratings}</h3>

        <button onClick={dec}>-</button>

        <h2>{quantity}</h2>

        <button onClick={inc}>+</button>

        <p
          style={{
            width: "70%",
            textAlign: "justify",
            marginTop: "20px"
          }}
        >
          {product.product_description}
        </p>

        <form onSubmit={placeOrder}>

          <input
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />

          <input
            type="text"
            placeholder="Enter Mobile No"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <br />

          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <textarea
            placeholder="Enter Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>

          <br />

          <button type="submit">
            Order
          </button>

        </form>

      </center>
    </>
  )
}

export default ProductDetails