import React from 'react';
import useTheme from './hooks/useTheme';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import AppNavigator from './navigators/AppStackNavigator';



function App(): React.JSX.Element {

  const { theme, toggleTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <Text style={[styles.text, { color: theme.color }]}>Home Screen</Text>
    <Button onPress={toggleTheme} title={`Switch to ${theme.color === '#e9e9e9' ? 'Light' : 'Dark'} Mode`} color={theme.linkColor} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});


export default App;
