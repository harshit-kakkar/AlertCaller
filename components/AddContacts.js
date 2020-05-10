import React from 'react'

import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'

import Contacts from 'react-native-unified-contacts';




// Token for git by vscode;: vscode://vscode.github-authentication/did-authenticate?windowId=4&code=c88c723b3202c73e58d2&state=cfa57333-e045-4b46-911d-3646fa69ad03

const AddContacts = () => {

    function selectedContact(){
        Contacts.requestAccessToContacts( (userCanAccessContacts) => {
            if (userCanAccessContacts) {
    
                Contacts.selectContact( (error, contact) =>  {
                    if (error) {
                      console.error(error);
                    }
                    else {
                      console.log(contact);
                      Alert.alert(
                          "Send Request ?",
                          "You are sending request to "+ contact.fullName,
                          [
                              {
                                  text: 'Cancel',
                                  onPress: () => console.log("Cancel pressed")
                              },
                              {
                                text: 'Send',
                                onPress: () => SendRequest()
                            }
    
                          ]
                      )
                    }
                  });
    
            }
            else {
              console.log("User DOES NOT have access to Contacts!");
            }
          });
    }
    

    function SendRequest(){
        console.log("Send request function")
    }



    return (
        <View style={styles.container}>
            
            <TouchableOpacity 
                style={styles.AddContactsButton}
                onPress={()=> selectedContact()}
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