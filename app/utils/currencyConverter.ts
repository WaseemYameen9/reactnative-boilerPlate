export const convertCurrency = (amount: number, currency: string): number | null => {
    const exchangeRates: { [key: string]: number } = {
      USD: 0.0036,
      SAR: 0.013,
    };
  
    if (!exchangeRates[currency]) {
      return null;
    }
  
    return amount * exchangeRates[currency];
  };