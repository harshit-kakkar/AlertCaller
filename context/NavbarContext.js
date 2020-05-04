import React, {createContext} from 'react'

export const NavbarContext = createContext()

export const NavbarProvider = (props) => {
    const [selectedTab, setSelectedTab] = React.useState(1) //Using 1 for linked contacts, 2 for requests tab.

    return (
        <NavbarContext.Provider value={[selectedTab, setSelectedTab]}>
            {props.children}
        </NavbarContext.Provider>
    )
}