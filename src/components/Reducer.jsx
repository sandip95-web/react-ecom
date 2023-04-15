const reducer=(state,action)=>{
    switch (action.type){
        // case "ADD_DIGITAL_PRODUCT":
           
        //     return{
        //         ...state,
        //         digitalProduct:action.payload,
        //         isLoading:false
        //     }
        case "ADD_CLOTHES_PRODUCT":
            return{
                ...state,
                clothesProduct:action.payload,
                isLoading:false
            }
        case 'SET_LOADING':
            return{
                ...state,
                isLoading:true
            }
        case 'SET_ERROR':
            return{
                ...state,
                isError:true,
                isLoading:false
            }

        // case "ADD_SINGLE_PRODUCT":
        //     const {image}=action.payload
        //     return{
        //         ...state,
        //         singleProduct:action.payload,
        //         singleLoading:false,
        //         Image:image
        //     }
        case "ADD_SINGLECLOTHES_PRODUCT":
            return{
                    ...state,
                    singleClothesProduct:action.payload,
                    singleLoading:false,
                }
        case 'SET_SINGLE_LOADING':
            return{
                ...state,
                singleLoading:true
            }
        case 'SET_SINGLE_ERROR':
            return{
                ...state,
                isError:true,
                singleLoading:false
            }
        
        case 'ADD_TO_CART':
            const {id,data,amount}=action.payload
             
            const existingProduct=state.cart.find((item)=>item.id==id)
            if(existingProduct){
                let updatedCart=state.cart.map((item)=>{
                    if(item.id==id)
                    {
                        let newAmount=item.amount+amount
                        return{
                            ...item,
                            amount:newAmount
                        }
                    }
                    else{
                        return item
                    }
                })
                return{
                    ...state,
                    cart:updatedCart
                }
            }
            else{
                const cartProduct={
                    title:data.title,
                    image:data.image,
                    price:data.price,
                    amount:amount,
                    id:id
                }
                return{
                    ...state,
                    cart:[...state.cart,cartProduct],
                }
            }
        case 'SET_INCREMENT':
            const updatedProduct=state.cart.map((item)=>{
                if(item.id==action.payload){
                    if(item.amount<10)
                    {
                        let decAmount=item.amount+1
                    return{
                        ...item,
                        amount:decAmount
                    }
                    }
                    else{
                        return{
                            ...item,
                           amount:10
                        }
                    }
                }
                else{
                    return item
                }
            })
            return {...state,cart:updatedProduct}
        
        case 'SET_DECREMENT':
            const updateProduct=state.cart.map((item)=>{
                if(item.id==action.payload){
                    if(item.amount>0)
                    {
                        const incAmount=item.amount-1
                    return{
                        ...item,
                        amount:incAmount
                    }
                    }
                    else{
                        return{
                            ...item,
                            amount:0
                        }
                    }
                }
                else{
                    return item
                }
            })
            return {...state,cart:updateProduct}
        
        case 'CLEAR_CART':
            return{
                ...state,
                cart:[]
            }
        case 'REMOVE_ITEM':
            let updateItem=state.cart.filter((item)=>{
                return item.id!=action.payload
            })
            return{
                ...state,
                cart:updateItem
            }
    }
}

export default reducer