import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from './Reducer'
const AppContext=createContext()

// const API = "https://dummyjson.com/products";
const getLocalCart=()=>{
    let localCartData=localStorage.getItem("localCart")
    if(localCartData.length < 1 || localCartData == undefined)
    {
        return []
    }
    else{
        return JSON.parse(localCartData)
    }
}
const API2='https://fakestoreapi.com/products'
const initialState={
    isLoading:false,
    isError:false,
    // digitalProduct:[],
    clothesProduct:[],
    // featuredProduct:[],
    singleLoading:false,
    singleProduct:[],
    singleClothesProduct:[],
    Image:[],
    cart:getLocalCart()
}
const AppProvider=({children})=>{

    const[state,dispatch]=useReducer(reducer,initialState)
//fetching the digital product
// const fetchDigitalProductApi=async(url)=>{
    
//     dispatch({type:'SET_LOADING'})
    
//     try {
//         const res=await axios.get(url);
//         console.log(res);
//         const dproduct=await res.data.products
//         dispatch({
//             type:'ADD_DIGITAL_PRODUCT',
//             payload:dproduct
//         })
//     } 
    
//     catch (error) {
//         dispatch({
//             type:"SET_ERROR"
//         })
//     }
// }
//fetch clothes api
const fetchClothesProductApi=async(url)=>{
    
    dispatch({type:'SET_LOADING'})
    
    try {
        const res=await axios.get(url);
        const dproduct=await res.data
        dispatch({
            type:'ADD_CLOTHES_PRODUCT',
            payload:dproduct
        })
    } 
    
    catch (error) {
        dispatch({
            type:"SET_ERROR"
        })
    }
}
//fetching single product detail

// const FetchSingleProduct=async (url)=>{
//     dispatch({type:'SET_SINGLE_LOADING'})
    
//     try {
//         const res=await axios.get(url);
//         const singleproduct=await res.data
//         dispatch({
//             type:'ADD_SINGLE_PRODUCT',
//             payload:singleproduct
//         })
//     } 
    
//     catch (error) {
//         dispatch({
//             type:"SET_SINGLE_ERROR"
//         })
//     }
// }
const FetchSingleClothesProduct=async (url)=>{
    dispatch({type:'SET_SINGLE_LOADING'})
    
    try {   
        const res=await axios.get(url);
        const singleproduct=await res.data
        dispatch({
            type:'ADD_SINGLECLOTHES_PRODUCT',
            payload:singleproduct
        })
    } 
    
    catch (error) {
        dispatch({
            type:"SET_SINGLE_ERROR"
        })
    }
}


//add to cart

const addToCart=(data,amount,id)=>{
    console.log(amount);
    dispatch({
        type:'ADD_TO_CART',
        payload:{data,amount,id}
    })
}
useEffect(()=>{
    fetchClothesProductApi(API2)
},[])

//to set cart increment and decrement

const setIncrement=(id)=>{
    dispatch({
        type:'SET_INCREMENT',
        payload:id
    })
}

const setDecrement=(id)=>{
    dispatch({
        type:'SET_DECREMENT',
        payload:id
    })
}

//to remove item from the cart

const removeItem=(id)=>{
    dispatch({
        type:'REMOVE_ITEM',
        payload:id
    })
}

//to clear the whole cart
const clearCart=()=>{
    dispatch({
        type:'CLEAR_CART'
    })
}
//add to localstorage

useEffect(()=>{
    localStorage.setItem('localCart',JSON.stringify(state.cart))
},[state.cart])

  


    return <AppContext.Provider value={{...state,FetchSingleClothesProduct,addToCart,setIncrement,setDecrement,clearCart,removeItem}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext=()=>{
   return useContext(AppContext)
}   
export {AppProvider,useGlobalContext}