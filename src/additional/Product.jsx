import React from 'react'
import { useGlobalContext } from './context'
import FormatMoney from './FormatMoney'
import {NavLink, useParams} from 'react-router-dom'
const Product = () => {
  const {isLoading,digitalProduct}=useGlobalContext()
  if(isLoading){
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
     <div className='container'>
     <div className="section-title stitle">
          <h2>Our Products</h2>
      </div>
     {/* <div className="dcard d-flex flex-wrap">
         {
          digitalProduct.map((item)=>{
            const{id,name,image,price,company,description}=item
              return(
                <>
     <NavLink to={`/product/${id}`}>
      <div className="card h-100 m-3 dzoom" style={{width:400}} key={id}>
       <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><FormatMoney price={price} /></p>
      </div>
    </div>
    </NavLink>
    </>
              )
          })
         }
     </div> */}
     <main id="main">
<section id="blog" className="blog">
  <div className="container" data-aos="fade-up">

    <div className="row">
    <div className="col-lg-3">
    <div className="sidebar">
          <h3 className="sidebar-title">Categories</h3>
          <div className="sidebar-item categories">
            <ul>
             <NavLink to='/product'><li><strong>Digital Product</strong></li></NavLink>
             <NavLink to='/clothes'><li><strong>Clothes</strong></li></NavLink>
          
            </ul>
        </div>
          
        </div>
</div>
    <div className="col-lg-9 entries">
<article className="entry entry-single dart">
<div className="dcard d-flex flex-wrap">
         {
          digitalProduct.map((item)=>{
            const{id,title,thumbnail,price,description}=item
              return(
                <>
     <NavLink to={`/product/${id}`} className='dlink'>
      <div className="card h-100 m-2 my-2 dzoom" style={{width:270}} key={id}>
       <img src={thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><FormatMoney price={price} /></p>
      </div>
    </div>
    </NavLink>
    </>
              )
          })
         }
     </div>
</article>
</div>

</div>
</div>
</section>
</main>
     </div>
  )
}

export default Product