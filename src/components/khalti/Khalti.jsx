import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './KhaltiConfig'
const Khalti = ({total}) => {
  let checkout = new KhaltiCheckout(config);
  // let num=parseInt(total)
  // console.log(num);
  return (
      <>
      
       <button className="btn btn-success"
        onClick={()=>checkout.show({amount:20*100})}
        >
        Payment
        </button>
      
      </>
  )
}

export default Khalti