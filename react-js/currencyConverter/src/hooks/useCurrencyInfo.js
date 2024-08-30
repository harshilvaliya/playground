import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch currency data: ${response.status}`);
        }
        const json = await response.json();
        setData(json[currency]);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;