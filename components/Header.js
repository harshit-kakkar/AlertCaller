import React from 'react'

import {View, Text, StyleSheet} from 'react-native'


const Header = () => {
    return (
        <View style={styles.headContainer}>
            <Text style={styles.headText}>Alert Caller</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headContainer: {
        
        height: 70,
        
        

    },
    headText: {
        color: 'black',
        textAlign: "center",
        fontSize: 30,
        margin: 15

    }

})

export default Header