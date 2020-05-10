import React from 'react'

import {View, Text, StyleSheet} from 'react-native'
import axios from 'axios';

const SendRequest = (props) => {
    let contact = props.contact
    let phone = '9027326034';
    let url = 'http://192.168.29.37:9183/request/sent'

    const [reqPosition, setReqPosition] = React.useState('Sending request ...')

    React.useEffect(() => {
        if(props.contact == ''){
        }
        else{
            axios.put(url, {
                phone: phone,
                sentPhone: contact
            })
            .then(response => {
                props.setReqSent(true)
                setReqPosition('Request sent successfully')
                console.log(response)
            })
            .catch(err => {
                console.log(err)
                setReqPosition('Request failed.')

            })
            
        }
    }, [props.contact])

    return (
        
        <View>
            {contact == '' ? 

                <View></View> 
                : 
                <View>
                    <Text style={styles.sentSuccessfullyText}>{reqPosition} </Text>
                </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    sentSuccessfullyText: {
        color: "#008000",
        fontSize: 20,
        textAlign: "center"
    }
})


export default SendRequest;