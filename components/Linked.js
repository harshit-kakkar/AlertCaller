import React from 'react'

import {View, Text, StyleSheet, Alert} from 'react-native'
import axios from 'axios'



const Linked = () => {

    let phone = '9027326034'

    let url = 'http://192.168.29.37:9183/linked?phone=' + phone
    React.useEffect(() => {
        axios.get(url)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            // Alert.alert('error', 'An error occured', [{text: Ok}])
            console.log(error.message)
        })
    }, [])

    return (
        <View >
            <Text >Linked contacts will be displayed here.</Text>

        </View>
    )
}

export default Linked