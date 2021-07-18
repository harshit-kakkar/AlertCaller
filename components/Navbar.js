import React from 'react'

import {View, Text, StyleSheet, Button, TouchableOpacity, Alert} from 'react-native'

import {NavbarContext} from '../context/NavbarContext'

import Sound from "react-native-sound"
import SystemSetting from 'react-native-system-setting'
Sound.setCategory('Playback');

let pressedColor = '#C7701F';
let unPressedColor = '#FC8B23';

const Navbar = () => {

    const [selectedTab, setSelectedTab] = React.useContext(NavbarContext)
    function playSound(){
        Sound.setCategory('Playback');
        const whoosh  = new Sound('notification.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
             console.log('failed to load the sound', error);
             }else{
                SystemSetting.setVolume(1)
                SystemSetting.getVolume().then(a => console.log(a)).catch(err => console.log(err))
                whoosh.play((success) => {
                    if (success) {
                        console.log("Sound played successfully")
                        
                    } else {
                        console.log('playback failed due to audio decoding errors');
                        //reset the player to its uninitialized state (android only)
                        whoosh.reset();
                  }})
             }
            })
        console.log("Sound is played ...")
        
    }


    return (
        <View style={styles.ButtonStyleView}>
            <TouchableOpacity  
                style={selectedTab===1? styles.TButton1: styles.TButton2 }
                onPress={() => setSelectedTab(1)}
                >
                <Text style={styles.Button1Text}> LINKED </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={selectedTab===1? styles.TButton2: styles.TButton1 } 
                onPress={() => setSelectedTab(2)}
                >
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
        backgroundColor: pressedColor,
        justifyContent: "center",
        borderBottomWidth: 2
        
    },
    Button1Text:{
        textAlign: "center",
        fontSize: 18
        
    },
    TButton2:{
        flex: 1,
        backgroundColor: unPressedColor,
        justifyContent: "center",
        borderBottomWidth: 2
    },
    Button2Text:{
        textAlign: "center",
        fontSize: 18
    },
    

   
})


export default Navbar