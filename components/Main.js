import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

import {NavbarContext} from '../context/NavbarContext'
import Linked from './Linked'
import Requests from './Requests'


const Main = () => {
    const [selectedTab, setSelectedTab] = React.useContext(NavbarContext)
    return (
        <View >
            {selectedTab===1?
                <Linked />
                :
                <Requests />
            }
        </View>
         
    )
}

export default Main