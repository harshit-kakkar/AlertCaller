import React from 'react'

import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import SendRequest from './SendRequest'
import Contacts from 'react-native-unified-contacts';




// Token for git by vscode;: vscode://vscode.github-authentication/did-authenticate?windowId=4&code=c88c723b3202c73e58d2&state=cfa57333-e045-4b46-911d-3646fa69ad03




const AddContacts = (props) => {
    
    const [contact, setContact] = React.useState('')
    const [reqSent, setReqSent] = React.useState(false)

    if(reqSent == true){
        
        setTimeout(function () {
            setContact('')
            setReqSent(false)
        }, 5000);
    }


    function selectedContact(){
        Contacts.requestAccessToContacts( (userCanAccessContacts) => {
            if (userCanAccessContacts) {

                Contacts.selectContact( (error, contact) =>  {
                    if (error) {
                    console.error(error);
                    }
                    else {
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
                                onPress: () => CorrectNumber(contact.phoneNumbers[0].stringValue)
                                
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
    
    let selectedPhoneCorrected = ''

    function CorrectNumber(selectedPhone){
        
        selectedPhoneCorrected = ''
        for (let i=0;i<selectedPhone.length;i++){
            if(selectedPhone[i]== '(' || selectedPhone[i]==')' || selectedPhone[i]=='-' || selectedPhone[i]==' '){
                continue;
            }
            else{
                selectedPhoneCorrected += selectedPhone[i]
            }
            
        }
        setContact(selectedPhoneCorrected)
        
    }


    return (
        <View style={styles.container}>
            
            <TouchableOpacity 
                style={styles.AddContactsButton}
                onPress={()=> selectedContact()}
                >
                    <Text style={styles.AddContactsButtonText}>Add Contacts</Text>
                
            </TouchableOpacity>

            <SendRequest 
                contact={contact} 
                setReqSent={setReqSent}
                setSendReq2={props.setSendReq2}
            />

            
            
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