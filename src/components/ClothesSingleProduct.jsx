import React from 'react'
import { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './context'
import {FiMinusCircle} from 'react-icons/fi'
import {SlPlus} from 'react-icons/sl'
import {NavLink} from 'react-router-dom'
const API2='https://fakestoreapi.com/products'
const ClothesSingleProduct = () => {
  const [amount,setAmount]=useState(1)

 const setDecrement=()=>{
    amount>1 ? setAmount(amount-1) : setAmount(1)
 }
 const setIncrement=()=>{
  amount<10 ? setAmount(amount+1) : setAmount(10)
 }
    const {id}=useParams()
    const {singleLoading,singleClothesProduct,FetchSingleClothesProduct,addToCart}=useGlobalContext()
   
    useEffect(()=>{
        return ()=>{
          FetchSingleClothesProduct(`${API2}/${id}`)
        }
       },[])
 const{title,category,description,price,image,rating}=singleClothesProduct
       if(singleLoading)
       {
        return(
          <>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
             <div className="d-flex align-items-center justify-content-center mx-5">
            <strong><h1>Loading...</h1></strong>
            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
          </>
        )
       } 
  return (
    <>
    <br /><br /><br />
    <>
<main id="main">
<section id="breadcrumbs" className="breadcrumbs" key={id}>
  <div className="container" key={id}>
  <h2>{title}</h2>
  </div>
</section>

<section id="blog" className="blog">
  <div className="container" data-aos="fade-up">

    <div className="row">

      <div className="col-lg-8 entries">

        <article className="entry entry-single">

          {/* <div className="entry-img">
              <Image image={image} />
           </div> */}
<div className="image">
<img src={image} alt="" className='cimage' />
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
             <li><strong>Category: {category}</strong></li>
             <li><strong>Review: {rating && rating.count}</strong></li>
             <li><strong>Price: Rs.{parseFloat(price*139).toFixed(2)}</strong></li>              
              <li><strong>Rating: {rating && rating.rate}</strong></li>            
              <strong>Quantity</strong>
        <br /><br />
          <div className='d-flex amount'>
          <button className='idbtn' onClick={()=>{setDecrement()}}><FiMinusCircle/></button>
         <h1>{amount}</h1>
        <button className='idbtn' onClick={()=>{setIncrement()}}><SlPlus/></button>
          </div>
          <br />
          
            <button className="btn btn-primary" onClick={()=>addToCart(singleClothesProduct,amount,id)}>
            Add To Cart
            </button>

            </ul>
        </div>
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

export default ClothesSingleProduct