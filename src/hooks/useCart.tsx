import { useContext } from "react"
import CartContext from "../context/CaertProvider"
import { UseCartContextType } from "../context/CaertProvider"

const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useCart