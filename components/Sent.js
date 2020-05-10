import React from 'react'

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Axios from 'axios'



const Sent = () => {

    const [sent, setSent] = React.useState([])

    let phone = '9027326034'
    let url = 'http://192.168.29.37:9183/request/sent?phone=' + phone
    React.useEffect(() => {
        Axios.get(url)
        .then(response => {
            console.log(response.data[0].sent)
            setSent(response.data[0].sent)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <View>
            <Text>All sent requests : </Text>
            <FlatList 

                data={sent}
                renderItem={
                    ({item}) => <View>
                                    <Text>{item}</Text>
                                    <TouchableOpacity>
                                        <Text>x</Text>
                                    </TouchableOpacity>
                                </View>
                }
                keyExtractor={(item, index) => index.toString()}
            
            />
        </View>
    )
}

export default Sent