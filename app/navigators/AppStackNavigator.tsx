
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native-paper';
//import SignInScreen from '../screens/SignInScreen';
//import SignUpScreen from '../screens/SignUpScreen';
//import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function AppNavigator(): React.JSX.Element {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Sign In"
    //       component={SignInScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Sign Up"
    //       component={SignUpScreen}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Text>Navigator</Text>
  );
}

export default AppNavigator;
