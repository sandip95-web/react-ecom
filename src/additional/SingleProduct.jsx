import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './context'
import FormatMoney from './FormatMoney'
import {FiMinusCircle} from 'react-icons/fi'
import {SlPlus} from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
const SingleProduct = () => {
 const {id}=useParams()

 const [amount,setAmount]=useState(1)

 const setDecrement=()=>{
    amount>1 ? setAmount(amount-1) : setAmount(1)
 }
 const setIncrement=()=>{
  amount<10 ? setAmount(amount+1) : setAmount(10)
 }
const API = "https://api.pujakaitem.com/api/products";
 const{FetchSingleProduct,singleLoading,singleProduct,addToCart}=useGlobalContext()
 const {title,description,price,category,images}=singleProduct

 if(singleLoading)
 {
  return(
    <>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       <div class="d-flex align-items-center justify-content-center mx-5">
      <strong><h1>Loading...</h1></strong>
      <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
    </>
  )
 } 
 
 useEffect(()=>{
  return ()=>{
    FetchSingleProduct(`${API}?id=${id}`)
  }
 },[])
 return (
    <>
    <br /><br /><br />
    <>
<main id="main">
<section id="breadcrumbs" className="breadcrumbs" key={id}>
  <div className="container">
  <h2>{title}</h2>
  </div>
</section>

<section id="blog" className="blog">
  <div className="container" data-aos="fade-up">

    <div className="row">

      <div className="col-lg-8 entries">

        <article className="entry entry-single">

<div className="img">
  <ImageFile img={Image} />
</div>

          <div className="entry-content">
            <strong>Description</strong>
            <br />
            <p>{description}</p>
          </div>


        </article>

       
       

      </div>

      <div className="col-lg-4">

        <div className="sidebar">
          <h3 className="sidebar-title">INFO</h3>
          <div className="sidebar-item categories">
            <ul>
             <li><strong>Company: {company}</strong></li>
             <li><strong>Category: {category}</strong></li>
             <li><strong>Review: {reviews}</strong></li>
             <li><strong>Price: <FormatMoney price={price} /></strong></li>              
              <li><strong>Rating: {stars}</strong></li>            
            </ul>
        </div>
        <strong>Quantity</strong>
        <br /><br />
          <div className='d-flex amount'>
          <button classname='idbtn' onClick={()=>{setDecrement()}}><FiMinusCircle/></button>
         <h1>{amount}</h1>
        <button classname='idbtn' onClick={()=>{setIncrement()}}><SlPlus/></button>
          </div>
          <br />
          <NavLink to='/cart'><button className="btn btn-primary" onClick={()=>addToCart(singleProduct,amount)}>Add To Cart</button></NavLink>
        </div>

      </div>

    </div>

  </div>
</section>

</main>
          </>
    </>
  )
}

export default SingleProduct