import { useState, useEffect, useCallback } from "react";
import { apiService } from "../services";

interface IPagination {
  pageSize: number;
  current: number;
}

function useDepositList(pagination: IPagination) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchData = useCallback(
    async (params: IPagination = { pageSize: 20, current: 1 }) => {
      setLoading(true);
      try {
        const { data } = await apiService.get(
          `/deposits?page=${params.current}&limit=${params.pageSize}`
        );
        setItems(data.items);
        setTotal(data.total);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const onPaginationChange = useCallback(
    async (params: IPagination) => {
      fetchData(params);
    },
    [fetchData]
  );

  useEffect(() => {
    fetchData(pagination);
  }, [fetchData, pagination]);

  return { loading, items, total, onPaginationChange };
}

export default useDepositList;
