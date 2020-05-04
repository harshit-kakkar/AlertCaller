/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavbarProvider} from './context/NavbarContext'

AppRegistry.registerComponent(appName, () => App);
