import React from 'react'

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Axios from 'axios'
import {SendRequestContext} from '../context/SendRequestContext'


const Sent = (props) => {

    const [sent, setSent] = React.useState([])
    const [sendReq, setSendReq] = React.useContext(SendRequestContext)

    let phone = '9027326034'
    let url = 'http://192.168.29.37:9183/request/sent?phone=' + phone
    React.useEffect(() => {
        Axios.get(url)
        .then(response => {
            setSent(response.data[0].sent)
            setSendReq(0)
        })
        .catch(err => {
            console.log(err)
        })
    }, [sendReq])
    return (
        <View>
            <Text>All sent requests : </Text>
            <FlatList 

                data={sent}
                renderItem={
                    ({item}) => <View style={styles.sentListContainer}>
                                    <Text style={styles.sentListText}>{item}{props.sendReq2}</Text>
                                    <TouchableOpacity 
                                        style={styles.xButton}
                                        >
                                        <Text style={styles.xButtonText}>x</Text>
                                    </TouchableOpacity>
                                </View>
                }
                keyExtractor={(item, index) => index.toString()}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sentListContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 6,
        padding: 8,
        marginLeft: 25,
        marginRight: 40
    },
    sentListText: {
        fontSize: 20
    },
    xButton: {
        borderWidth: 1,
        width: 45,
        justifyContent: "center",
        backgroundColor: "#8B0000",
        borderRadius: 8
    },
    xButtonText: {
        fontSize: 20,
        textAlign: "center",
        color: "#e9eaec"
    }
})

export default Sent