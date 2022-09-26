import { createContext,useState, useEffect } from "react";


const addItem = (cartItem,product)=>{

   // firsty we have to find out if the product Object is part of the cartItem Array
   const check = cartItem.find(item=> item.id === product.id) // we use the find operator to check if product is in cartItem. note the find operator return True/False   

   // secoundly we will use the ifelse statment to only add to the quantity if the product is already part of the array
   if(check){
      //we will use map so as to not mutate our original array
     return cartItem.map(item=> item.id === product.id ? {...item, quantity:item.quantity + 1} : item) //we used the spred operator to return a new array to cartItem
   }

  return [...cartItem, {...product, quantity: 1}] // we use spred operator to return the original array and so to add the product which is an object and also add quantity to the object 
}

const removeItem = (cartItem,product)=>{

   // find if product is present in cartItem
   const check = cartItem.find(e=> e.id === product.id)

   if(check){
      return cartItem.map(elem => elem.id === product.id ? {...elem, quantity: elem.quantity - 1} : elem)
   }

   return [...cartItem]
}

export const cartContext = createContext({
   isCartOpen:false,
   cartItem : [],
   addCartItem:()=>{},
   cartCount:0,
   removeCartItem:()=>{},
   total:0
})



export const IconProvider = ({children})=>{

   const [isCartOpen, setIsCartOpen] = useState(false);
   
   const [cartItem,setCartItem] = useState([])

   const [cartCount,setCartCount] = useState(0)
   const [total, setTotal] = useState(0)



   useEffect(()=>{
      const totalQuantity = cartItem.reduce((a,b)=>a+b.quantity,0)
      setCartCount(totalQuantity)
   },[cartItem])

   useEffect(()=>{
      const totalCount = cartItem.reduce((zero,cartItem)=>zero+cartItem.quantity * cartItem.price,0)
      setTotal(totalCount)
   },[cartItem])
   
   const addCartItem = (product)=>{
      setCartItem(addItem(cartItem,product))
   }

   const removeCartItem = (product)=>{
      setCartItem(removeItem(cartItem,product))
   }
   
   const value = {
      isCartOpen,
      setIsCartOpen,
      addCartItem,
      cartItem,
      cartCount,
      removeCartItem,
      setCartItem,
      total
   };
  

   return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}

