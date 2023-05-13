import React from 'react'
import { useGlobalContext } from './context'
import Table from 'react-bootstrap/Table';
import {NavLink} from 'react-router-dom'
import{RiDeleteBin2Line}from 'react-icons/ri'
import CartIncDec from './CartIncDec';
import Khalti from './khalti/Khalti'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Cart = () => {
  const{cart,setIncrement,setDecrement,clearCart,removeItem,total}=useGlobalContext()
  if(cart.length==0)
{
  return <h1 className='no-cart'>NO ITEM IN THE CART</h1>
}
  
  return (
    <>
    <br /><br /><br /><br /><br /><br />  
    <div className="container">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Items</th>
          <th>Price</th>
          <th>amount</th>
          <th>Subtotal</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item)=>{
              const{id,title,price,image,amount}=item
                   return(
                       <>
                         <tr>
                   <td>
                     <img src={image} className='cimg' alt="" />
                     <h3>{title}</h3>
                   </td>
                   <td>Rs.{parseFloat(price*139).toFixed(2)}</td>
                   <td>

                    <CartIncDec setDecrement={()=>setDecrement(id)} setIncrement={()=>setIncrement(id)} amount={amount} />
                   </td>
                   <td>Rs.{parseFloat((price*139)*amount).toFixed(2)}</td>
                   
                   <td><button className='btn' onClick={()=>removeItem(id)}><RiDeleteBin2Line className='remove' /></button></td>
                 </tr>
                       </>
                    
                   )
                 
        })
      }
      </tbody>
    </Table>
    <div className="cart-fbutton">
      {/* <h1>{parseFloat(total).toFixed(2)}</h1> */}
    <NavLink to ='/clothes'>
      <button className="btn btn-primary">
    Continue Shopping</button>
    </NavLink>
  <button className="btn btn-primary" onClick={()=>clearCart()}>Clear Cart</button>
    </div>
    <br />
    <div className="total">
    <Card style={{ width: '14rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Total: Rs.{parseFloat(total).toFixed(2)} </ListGroup.Item>
        <ListGroup.Item>
          <Khalti total={total} />
        </ListGroup.Item>
        
      </ListGroup>
    </Card>
    </div>
    </div>
    </>
  )
}

export default Cart