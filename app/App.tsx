import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AppNavigator from './navigators/AppStackNavigator';



function App(): React.JSX.Element {

  return (
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
