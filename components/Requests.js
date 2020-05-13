import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

import AddContacts from './AddContacts'
import Sent from './Sent'



const Requests = () => {
    return (
        <View >
            <AddContacts />
            <Sent />
        </View>
    )
}

export default Requests