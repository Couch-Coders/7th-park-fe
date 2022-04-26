import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        // console.log('response');
        const response = await fetch(url);
        // console.log(response);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return [data, error, loading];
}
