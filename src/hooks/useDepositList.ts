import { useState, useEffect, useCallback } from "react";
import { apiService } from "../services";

interface IPagination {
  pageSize: number;
  current: number;
}

function useDepositList(pagination: IPagination) {
  const [datasource, setDatasource] = useState([]);
  const [loading, setLoading] = useState(false);
  const onPaginationChange = useCallback(() => {
    fetchData(pagination);
  }, []);

  const fetchData = useCallback(
    async (params: IPagination = { pageSize: 20, current: 1 }) => {
      console.log("params:", params);
      setLoading(true);

      try {
        const { data } = await apiService.get(
          `/deposits?page=${params.current}&limit=${params.pageSize}`
        );
        setDatasource(data);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchData(pagination);
  });

  return { loading, datasource, onPaginationChange };
}

export default useDepositList;
