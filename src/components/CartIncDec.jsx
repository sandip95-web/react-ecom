import React from 'react'
import {FiMinusCircle} from 'react-icons/fi'
import {SlPlus} from 'react-icons/sl'
const CartIncDec = ({amount,setDecrement,setIncrement}) => {
  return (
    <>
     <div className='d-flex amount'>
                  <button className='idbtn' onClick={()=>{setDecrement()}}><FiMinusCircle/></button>
                  <h1>{amount}</h1>
                   <button className='idbtn' onClick={()=>{setIncrement()}}><SlPlus/></button>
                   </div>
    </>
  )
}

export default CartIncDec