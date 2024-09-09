import { createContext, useState } from "react";

const NavbarDrawerContext = createContext()

const NavbarDrawerContextProvider = ({ children }) => {
    const [showNavMenu, setShowNavMenu] = useState(false)
    const [showHome, setShowHome] = useState(true)
    return (
        <NavbarDrawerContext.Provider value={{ showNavMenu, setShowNavMenu, showHome, setShowHome }}>{children}</NavbarDrawerContext.Provider>
    )
}

export { NavbarDrawerContext, NavbarDrawerContextProvider }