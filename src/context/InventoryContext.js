import { createContext, useContext, useReducer, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const InventoryContext = createContext(null)
const InventoryDispatchContext = createContext(null)

export const InventoryProvider = ({children}) => {
    const [inventoryInLS, setInventoryInLS] = useLocalStorage("inventory", initialInventory)
    const [inventory, dispatch] = useReducer(inventoryReducer, inventoryInLS)

    useEffect(()=>{
        setInventoryInLS(inventory)
    })

    return (
        <InventoryContext.Provider value={inventory}>
            <InventoryDispatchContext.Provider value={dispatch}>
                {children}
            </InventoryDispatchContext.Provider>
        </InventoryContext.Provider>
    )
}

export const useInventory = () => {
    return useContext(InventoryContext)
}

export const useInventoryDispatch = () => {
    return useContext(InventoryDispatchContext)
}

const inventoryReducer = (state, action) => {
    switch(action.type){
        case 'NEW_PRODUCT':{
            return [...state,{
                productName: action.productName,
                imageUrl: action.imageUrl,
                price: action.price,
                tags: action.tags,
                stock: parseInt(action.stock),
            }]
        }
        case 'STOCK_ADDED': {
            return state.map(product =>
                product.productName === action.productName
                    ? { ...product, stock: parseInt(product.stock) + parseInt(action.stock) }
                    : product 
            )
        }
        case 'STOCK_SOLD': { 
            return state.map(product =>
                product.productName === action.productName
                    ? { ...product, stock: Math.max(0, parseInt(product.stock) - parseInt(action.stock)) }
                    : product
            )
        }
        default:{
            console.log('Unknown action type: ', action.type)
            return state
        }
    }
}

const initialInventory = [
  {
    productName: "Samsung Galaxy S24 Ultra",
    imageUrl: "/samsumg s24ultra.jpg",
    price: 467899,
    tags: ["smartphone", "flagship"],
    stock: 3,
  },
  {
    productName: "samsung Book 3",
    imageUrl: "/SAMSUNG BOOK 3.jpeg",
    price: 89999,
    tags: ["smartphone", "flagship"],
    stock: 2,
   },
   {
    productName: "samsung S25 EDGE",
    imageUrl: "/SAMSUNG S25 EDGE.jpeg",
    price: 89999,
    tags: ["smartphone", "flagship"],
    stock: 2,
   },
   {
    productName: "samsung S25 ULTRA",
    imageUrl: "/SAMSUNG S25 ULTRA.jpg",
    price: 45600,
    tags: ["smartphone", "flagship"],
    stock: 6,
   },     
   {
    productName: "Samsung Tab S10 LITE",
    imageUrl: "/SAMSUNG TAB S10 LITE.jpeg",
    price: 45600,
    tags: ["smartphone", "flagship"],
    stock: 8,
   },     
   {
    productName: "Samsung Watch 7",
    imageUrl: "/SAMSUNG WATCH 7.webp",
    price: 29600,
    tags: ["smartphone", "flagship"],
    stock: 3,
   },
   {
    productName: "Samsung Watch ULTRA",
    imageUrl: "/SAMSUNG WATCH ULTRA.avif",
    price: 39600,
    tags: ["smartphone", "flagship"],
    stock: 9,
   },
   {
    productName: "Samsung Tab S10 ULTRA",
    imageUrl: "/SSUNG TAB S10 ULTRA.jpeg",
    price: 79900,
    tags: ["smartphone", "flagship"],
    stock: 12,
   },
   {
    productName: "Samsung Earbuds",
    imageUrl: "/EARBUDS.png",
    price: 900,
    tags: ["smartphone", "flagship"],
    stock: 12,
   },
   {
    productName: "Samsung powerbank",
    imageUrl: "/powerbank.png",
    price: 8000,
    tags: ["smartphone", "flagship"],
    stock: 15,
   },
   {
    productName: "Samsung headset",
    imageUrl: "/headset.jpg",
    price: 5000,
    tags: ["smartphone", "flagship"],
    stock:25,
   },
   {
    productName: "Samsung pen",
    imageUrl: "/download.jpg",
    price: 5000,
    tags: ["smartphone", "flagship"],
    stock:5,
   },
]