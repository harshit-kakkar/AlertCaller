import React from 'react'

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Axios from 'axios'





const Recieved = () => {

    const [recievedReq, setRecievedReq] = React.useState([])

    let phone = '8860490727'

    let url = 'http://192.168.29.37:9183/request/recieved?phone=' + phone
    React.useEffect(() => {
        Axios.get(url)
        .then(response => {
            setRecievedReq(response.data[0].recieved)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    


    return (
        <View >
            <Text>Recieved requests : </Text>
            <FlatList 

                data={recievedReq}
                renderItem={
                    ({item}) => 
                    <View style={styles.recievedList}>
                        <Text style={styles.recievedListText}>{item}</Text>
                        <View style={styles.recievedListButtons}>
                            <TouchableOpacity
                                style={styles.acceptButton}
                            >
                                <Text style={styles.acceptButtonText}>ACCEPT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.ignoreButton}
                            >
                                <Text style={styles.ignoreButtonText}>IGNORE</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    recievedList: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
    },
    recievedListText: {
        fontSize: 20
    },
    recievedListButtons: {
        flexDirection: "row",
        
    },
    acceptButton: {
        borderWidth: 1,
        margin: 2,
        padding: 8,
        backgroundColor: "green",
        borderRadius: 5
    },
    ignoreButton: {
        borderWidth: 1,
        margin: 2,
        padding: 8,
        backgroundColor: "#8B0000",
        borderRadius: 5
    },
    acceptButtonText: {
        color: "#e9eaec"
    },
    ignoreButtonText: {
        color: "#e9eaec"
    }
})

export default Recieved