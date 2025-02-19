import { useState, useEffect } from 'react';
import { fetchComments } from '../api/jsonPlaceHolder';
import { Comments } from '../types/data';

export const useFetchComments = (endpoint: string) => {
  const [data, setData] = useState<Comments>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchComments(endpoint);
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint]);

  console.log('data', data)

  return { data, loading, error };
};