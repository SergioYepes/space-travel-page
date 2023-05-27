import {createContext, useEffect, useState} from 'react'
import { ScreenSizeProps } from '../interfaces/ScreenSizeProps'

export const ScreenSizeContext = createContext<ScreenSizeProps>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
})

export const ScreenSizeProvider=({children}: any)=> {
    const [isMobile,setMobile]= useState<boolean>(window.innerWidth < 768)
    const [isDesktop,setDesktop]= useState<boolean>(window.innerWidth < 1240)
    const [isTablet,setTablet]= useState<boolean>(window.innerWidth < 1024)

    useEffect(() =>{
        function handleResize(){
            setDesktop(window.innerWidth<1240)
            setMobile(window.innerWidth < 768)
            setTablet(window.innerWidth < 1024)
        }
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

