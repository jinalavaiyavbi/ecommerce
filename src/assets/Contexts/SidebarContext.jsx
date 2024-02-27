import React, { createContext, useState } from 'react'

export  const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
    const [open, setopen] = useState(false);
    const handleclose = () => {
        setopen(false);
     }
    const [wishOpen, setwishOpen] = useState(false);
    const WishClose = () => {
      setwishOpen(false);
     }
  return (
    <SidebarContext.Provider value={{open,setopen,handleclose,WishClose,setwishOpen,wishOpen}}  >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
