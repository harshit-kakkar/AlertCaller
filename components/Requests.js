import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

import AddContacts from './AddContacts'
import Sent from './Sent'
import Recieved from './Recieved'



const Requests = () => {
    return (
        <View >
            <AddContacts />
            <Recieved />
            <Sent />
        </View>
    )
}

export default Requests