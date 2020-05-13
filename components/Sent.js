import React from 'react'

import {View, Text, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native'
import Axios from 'axios'
import {SendRequestContext} from '../context/SendRequestContext'


const Sent = (props) => {

    const [sent, setSent] = React.useState([])
    const [sendReq, setSendReq] = React.useContext(SendRequestContext)
    const [contactRemove, setContactRemove] = React.useState('')

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

    let urlRemove = 'http://192.168.29.37:9183/request/sent/remove'
    React.useEffect(() => {
        Axios.put(urlRemove, {
            phone: phone,
            sentPhone: contactRemove
        })
        .then(response => {
            setSendReq(1)
        })
        .catch(err => {
            console.log(err)
        })
    }, [contactRemove])

    return (
        <View>
            <Text>All sent requests : </Text>
            <FlatList 

                data={sent}
                renderItem={
                    ({item}) => <View style={styles.sentListContainer}>
                                    <Text style={styles.sentListText}>{item}</Text>
                                    <TouchableOpacity 
                                        style={styles.xButton}
                                        onPress={() =>
                                            Alert.alert(
                                                "Remove sent request ?",
                                                "You are removing sent request to "+ item,
                                                [
                                                    {
                                                        text: 'Cancel',
                                                        onPress: () => console.log("Cancelled Remove Operation")
                                                    },
                                                    {
                                                        text: 'Remove',
                                                        onPress: () => setContactRemove(item)
                                                        
                                                    }
                        
                                                ]
                                            ) 
                                            }
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