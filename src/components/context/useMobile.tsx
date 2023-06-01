import {createContext, useEffect, useState} from 'react'
import { ScreenSizeProps } from '../interfaces/ScreenSizeProps'

export const ScreenSizeContext = createContext<ScreenSizeProps>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
})

export const ScreenSizeProvider=({children}: any)=> {
    const [isMobile,setMobile]= useState<boolean>(false)
    const [isDesktop,setDesktop]= useState<boolean>(false)
    const [isTablet,setTablet]= useState<boolean>(false)

    useEffect(() =>{
        function handleResize(){
            setMobile(window.innerWidth < 767)
            setTablet(window.innerWidth >= 768 && window.innerWidth <= 1024)
            setDesktop(window.innerWidth > 1025)
        }
            handleResize()
            window.addEventListener("resize", handleResize)
        
        return()=>{
            window.removeEventListener("resize", handleResize)    
        }
    },[])
  return (
    <ScreenSizeContext.Provider value={{isMobile,isDesktop,isTablet}}>
        {children}
    </ScreenSizeContext.Provider>
  )
}

