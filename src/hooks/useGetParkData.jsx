import { useEffect, useState } from "react";

export default function useGetParkData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getParkData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (response.ok) {
          setData(result);
        } else {
          setHasError(true);
          setErrorMessage(result);
        }
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };
    getParkData();
  }, []);

  return { data, setData, isLoading, hasError, errorMessage };
}
