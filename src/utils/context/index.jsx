import  {createContext,useState} from 'react'

export const ClickMenuContext = createContext(undefined)

export const ClickMenuProvider = ({children}) =>{

    const [clickMenu,setClickMenu]=useState(false);
    const toggleMenu = () =>  {
      setClickMenu(!clickMenu);
    }

return (
    <ClickMenuContext.Provider value ={{clickMenu,toggleMenu}}>
        {children}
    </ClickMenuContext.Provider>
)
}
