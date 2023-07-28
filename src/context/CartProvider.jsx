import { createContext} from  'react'
const CartContext = createContext()
export default function CartProvider({children}){

return(
    <CartContext.Provider value={{}}>
        
        {children}
    </CartContext.Provider>
)
}