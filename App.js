/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'

import {NavbarProvider} from './context/NavbarContext'


const App = () => {


  return (
    <View style={styles.AppView}>
      <Header />
      <NavbarProvider>
          <Navbar />
          <Main />
      </NavbarProvider>

    </View>
    
  )
}

const styles = StyleSheet.create({
  AppView: {
    backgroundColor: '#A19F9F',
    minHeight: '100%'
  }
})

export default App;
