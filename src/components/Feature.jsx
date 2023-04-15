  import React from 'react'
import { useGlobalContext } from './context'
import FormatMoney from './FormatMoney'

const Feature = () => {
    const{featuredProduct}=useGlobalContext()
    return(
    <>
   <div className="section-title py-5">
          <h2>Feature Product</h2>
  </div>
  <div className="fcard container d-flex flex-row">
  {
        featuredProduct.map((item)=>{
            const{name,image,price,company,description}=item
            return(
<div>
    <div className="card h-100 mx-2">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p><FormatMoney price={price} /></p>
      </div>
    </div>
  </div>

            )
        })
      }

  </div>
  </>
    )
    }
export default Feature