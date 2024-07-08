// useTheme.js
import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';
import light from '../themes/light';
import dark from '../themes/dark';

const useTheme = () => {
  const colorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDarkTheme(colorScheme === 'dark');
  }, [colorScheme]);

  const theme = isDarkTheme ? dark : light;

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return { theme, isDarkTheme, toggleTheme };
};

export default useTheme;
