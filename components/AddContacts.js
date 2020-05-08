import React from 'react'

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


const AddContacts = () => {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity 
                style={styles.AddContactsButton}
                onPress={()=> console.log("Add to contacts is pressed.")}
                >
                <Text style={styles.AddContactsButtonText}>Add Contacts</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2
    },
    AddContactsButton: {
        borderWidth: 2,
        margin: 35,
        height: 50,
        backgroundColor: "darkslateblue",
        justifyContent: "center",
        borderRadius: 8

    },
    AddContactsButtonText: {
        color: "white",
        fontSize: 20,
        textAlign: "center"

    }
})

export default AddContacts