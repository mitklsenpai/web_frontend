import { useState, useEffect, useCallback, useRef } from 'react';

// ==============================|| HOOKS - FETCH ||============================== //

/**
 * Generic data-fetching hook.
 * Calls fetchFn once on mount. Use refetch() to re-trigger.
 * @param {Function} fetchFn - async function that returns the data to store
 * @returns {{ data, loading, error, refetch }}
 */
export function useFetch(fetchFn) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchFnRef = useRef(fetchFn);
  fetchFnRef.current = fetchFn;

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFnRef.current();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, refetch: execute };
}
