import React, {createContext} from 'react'

export const SendRequestContext = createContext()

export const SendRequestProvider = (props) => {
    const [sendReq, setSendReq] = React.useState(0)

    return (
        <SendRequestContext.Provider value={[sendReq, setSendReq]}>
            {props.children}
        </SendRequestContext.Provider>
    )
}