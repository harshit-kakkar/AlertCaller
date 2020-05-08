import React from 'react'

import {View, Text, StyleSheet, Alert, FlatList, Button, TouchableOpacity} from 'react-native'
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import axios from 'axios'

const Linked = () => {

    let phone = '9027326034'


    const [linkedContacts, setLinkedContacts] = React.useState([])


    let url = 'http://192.168.29.37:9183/linked?phone=' + phone
    React.useEffect(() => {
        axios.get(url)
        .then(response => {
            if(response.data.length ===0){
                setLinkedContacts([])
            }
            else{
                setLinkedContacts(response.data[0].linked)
            }
            
            
        })
        .catch(error => {
            // Alert.alert('error', 'An error occured', [{text: Ok}])
            console.log(error.message)
        })
    }, [])

    return (
        <View >
            {linkedContacts.length===0?
            <Text >Linked contacts will be displayed here.</Text>
            :
                
            <FlatList 
                data={linkedContacts}
                renderItem={
                    ({item}) => <View style={styles.ListItem}>
                                    <Text style={styles.LinkedText}>{item}</Text>
                                    
                                    <TouchableOpacity
                                        style={styles.CallButton}

                                            // TODO: onPress will also signal the server about the person being called. 
                                            
                                        onPress={() => RNImmediatePhoneCall.immediatePhoneCall(item)}
                                    >
                                        <Text style={styles.CallButtonText}>Alert Call</Text>
                                    </TouchableOpacity>
                                </View> 
                }
                keyExtractor={(item, index) => index.toString()}
            />
            
        }

        </View>
    )
}


const styles = StyleSheet.create({
    
    ListItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        padding: 15,
        paddingBottom: 20,
        borderBottomWidth: 2
    },
    LinkedText: {
        fontSize: 20
    },
    CallButton: {
        borderWidth:1,
        padding: 10,
        backgroundColor: "green",
        marginTop: -8
        
    },
    CallButtonText: {
        color: "white"
    }

})

export default Linked