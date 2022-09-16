import { createContext,useState } from "react";

export const IconContext = createContext({
   isCartOpen:false
})

export const IconProvider = ({children})=>{

   const [isCartOpen, setIsCartOpen] = useState(false);
   const value = { isCartOpen, setIsCartOpen };

   return <IconContext.Provider value={value}>{children}</IconContext.Provider>
}