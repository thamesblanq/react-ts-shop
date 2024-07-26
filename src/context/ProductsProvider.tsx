import { createContext, ReactElement, useState } from "react"

export type ProductType = {
    sku: string,
    name: string
    price: number,
}

//const initState: ProductType[] = []

const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState) // JS- const [products, setProducts] = useState(initState)

    /* useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            try {
                const res = await fetch('http://localhost:3500/products')
                const data = await res.json()
                return data
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.log(err.message);
                } else {
                    console.log('An unknown error occurred');
                }
                return [];
            }

            //const data = await fetch('http://localhost:3500/products').then(res => { return res.json })
        }

        fetchProducts().then(products => setProducts(products))
    }, []) */
 
    return <ProductsContext.Provider value={{ products }}>
                {children}
            </ProductsContext.Provider>
}

export default ProductsContext