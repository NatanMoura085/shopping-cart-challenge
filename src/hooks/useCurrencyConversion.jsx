// hooks/useCurrencyConversion.js
import { useState, useEffect } from "react";
import axios from "axios";

const useCurrencyConversion = () => {
  const [dollarRate, setDollarRate] = useState(0);
  const [conversionError, setConversionError] = useState(null);

  useEffect(() => {
    axios
      .get("https://economia.awesomeapi.com.br/last/USD-BRL")
      .then((response) => {
        const rate = parseFloat(response.data.USDBRL?.bid) || 0;
        setDollarRate(rate);
      })
      .catch((error) => {
        setConversionError("Failed to fetch dollar rate.");
      });
  }, []);

  return { dollarRate, conversionError };
};

export default useCurrencyConversion;
