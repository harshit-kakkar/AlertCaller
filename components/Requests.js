import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

import AddContacts from './AddContacts'
import Sent from './Sent'



const Requests = () => {
    const [sendReq2, setSendReq2] = React.useState(0)
    console.log("From parent : ", sendReq2)
    return (
        <View >
            <AddContacts setSendReq2={setSendReq2}/>
            <Sent sendReq2={sendReq2} setSendReq2={setSendReq2} />
        </View>
    )
}

export default Requests