import { useState, useEffect, useCallback } from "react";

import { apiService } from "../services";

export interface IPagination extends IRequestParams {
  total: number;
}

interface IRequestParams {
  pageSize: number;
  current: number;
}

interface IDeposit {
  depositAddress: string;
  lotSizeSatoshis: string;
  status: string;
  redemptionCost: string;
  createdAt: string;
}

interface IResponse {
  items: IDeposit[];
  total: number;
}

function useDepositList(defaultParams: IRequestParams) {
  const [items, setItems] = useState([] as IDeposit[]);
  const [pageSize, setPageSize] = useState(defaultParams.pageSize);
  const [current, setCurrent] = useState(defaultParams.current);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (params: IRequestParams) => {
    setLoading(true);
    try {
      const { data } = await apiService.get<IResponse>(
        `/deposits?page=${params.current}&limit=${params.pageSize}`
      );
      setItems(data.items);
      setTotal(data.total);
    } finally {
      setLoading(false);
    }
  }, []);

  const onPaginationChange = useCallback(
    async (newPagination: IPagination) => {
      setPageSize(newPagination.pageSize);
      setCurrent(newPagination.current);
      fetchData(newPagination);
    },
    [fetchData]
  );

  const onRefresh = useCallback(() => fetchData({ current, pageSize }), [
    current,
    fetchData,
    pageSize,
  ]);

  useEffect(() => {
    fetchData(defaultParams);
    // ignore defaultParams changes - we only want to use this once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  return {
    loading,
    items,
    pagination: {
      current,
      pageSize,
      total,
    } as IPagination,
    onPaginationChange,
    onRefresh,
  };
}

export default useDepositList;
