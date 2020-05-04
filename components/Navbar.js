import React from 'react'

import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

const Navbar = () => {
    return (
        <View style={styles.ButtonStyleView}>
            <TouchableOpacity style={styles.TButton1}>
                <Text style={styles.Button1Text}> LINKED </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TButton2}>
                <Text style={styles.Button2Text}> REQUESTS </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonStyleView:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 2,
        height: 50

    },
    TButton1:{
        flex: 1,
        backgroundColor: '#C7701F',
        justifyContent: "center",
        borderBottomWidth: 2
        
    },
    Button1Text:{
        textAlign: "center",
        fontSize: 18
        
    },
    TButton2:{
        flex: 1,
        backgroundColor: '#FC8B23',
        justifyContent: "center",
        borderBottomWidth: 2
    },
    Button2Text:{
        textAlign: "center",
        fontSize: 18
    },
    

   
})


export default Navbar