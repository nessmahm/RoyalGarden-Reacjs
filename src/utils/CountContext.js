import  {createContext,useState} from 'react'

export const CountProductsContext = createContext()

export const CountProductsProvider = ({children}) =>{

    const [countProducts  ,setcountProducts]=useState(0);
   

return (
    <CountProductsContext.Provider value ={{countProducts,setcountProducts}}>
        {children}
    </CountProductsContext.Provider>
)
}

