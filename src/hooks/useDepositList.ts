import { useState, useEffect, useCallback } from "react";

function useDepositList(pagination: any) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const onPaginationChange = useCallback(() => {}, []);

  const fetchData = useCallback(async (params = {}) => {
    console.log("params:", params);
    setLoading(true);
    const response = await fetch({
      url: "http://localhost:3001/deposits",
      method: "get",
      data: {
        results: 10,
        ...params,
      },
      type: "json",
    });
    console.log("response:", response);
    setLoading(false);
    setData(response.results);
  }, []);

  useEffect(() => {
    fetchData({
      results: pagination.pageSize,
      page: pagination.current,
    });
  }, [pagination, fetchData]);

  return { loading, data, onPaginationChange };
}

export default useDepositList;
