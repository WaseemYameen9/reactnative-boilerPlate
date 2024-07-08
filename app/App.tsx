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
import { useTranslation } from 'react-i18next';
import './localization/languages/i18n.config'
import i18next from './localization/languages/i18n.config';



function App(): React.JSX.Element {

  const { theme, toggleTheme } = useTheme();
  const {t}=  useTranslation();

  const changeLanguage=(lng:any)=>(
    i18next.changeLanguage(lng)
  );
  
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <Text style={[styles.text, { color: theme.color }]}>{t('title')}</Text>
    <View style={{flexDirection:'column',justifyContent:'space-around'}}>

    <Button onPress={toggleTheme} title={`Switch to ${theme.color === '#e9e9e9' ? 'Light' : 'Dark'} Mode`} color={theme.linkColor} />
    <Button title={"English"} onPress={()=>changeLanguage('en')}></Button>
    <Button title={"French"} onPress={()=>changeLanguage('fr')}></Button>
    </View>
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
