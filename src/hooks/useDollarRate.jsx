import { useEffect, useState } from "react";
import axios from "axios";

const useDollarRate = () => {
  const [dollarRate, setDollarRate] = useState(null);

  useEffect(() => {
    const fetchDollarRate = async () => {
      try {
        const response = await axios.get("https://economia.awesomeapi.com.br/last/USD-BRL");
        const dollarRate = parseFloat(response.data.USDBRL.bid);
        console.log(dollarRate)
        setDollarRate(dollarRate);
      } catch (error) {
        console.error("Error fetching dollar rate:", error);
      }
    };

    fetchDollarRate();
  }, []);

  return dollarRate;
};

export default useDollarRate;
