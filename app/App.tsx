import React, { useState } from 'react';
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
  TextInput,
} from 'react-native';

import AppNavigator from './navigators/AppStackNavigator';
import { useTranslation } from 'react-i18next';
import './localization/languages/i18n.config'
import i18next from './localization/languages/i18n.config';
import { convertCurrency } from './utils/currencyConverter';

function App(): React.JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  
  const [amount, setAmount] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');

  const handleConvert = (currency: string) => {
    const result = convertCurrency(parseFloat(amount), currency);
    setConvertedAmount(result);
    setSelectedCurrency(currency);
  };

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.color }]}>{t('title')}</Text>
      <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
        <Button onPress={toggleTheme} title={`Switch to ${theme.color === '#e9e9e9' ? 'Light' : 'Dark'} Mode`} color={theme.linkColor} />
        <Button title={"English"} onPress={() => changeLanguage('en')}></Button>
        <Button title={"Urdu"} onPress={() => changeLanguage('urdu')}></Button>
      </View>

      <TextInput
        style={[styles.input,{color:theme.color}]}
        keyboardType='numeric'
        placeholder={t('Inputplaceholder')}
        value={amount}
        onChangeText={setAmount}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <Button title={t('ConvertUSD')} onPress={() => handleConvert('USD')} />
        <Button title={t('ConvertSAR')} onPress={() => handleConvert('SAR')} />
      </View>

      {convertedAmount !== null && (
        <Text style={[styles.text, { color: theme.color, marginTop: 20 }]}>
          {t('Converted')}: {convertedAmount.toFixed(2)} ${selectedCurrency}
        </Text>
      )}
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
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginVertical: 20,
  }
});

export default App;
