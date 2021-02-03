import { useState, useEffect, useCallback } from "react";

import { apiService } from "../services";

export interface IPagination {
  pageSize: number;
  current: number;
  total: number;
}

type RequestParams = Pick<IPagination, "current" | "pageSize">;

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

function useDepositList(defaultPagination: IPagination) {
  const [items, setItems] = useState([] as IDeposit[]);
  const [pageSize, setPageSize] = useState(defaultPagination.pageSize);
  const [current, setCurrent] = useState(defaultPagination.current);
  const [total, setTotal] = useState(defaultPagination.total);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (params: RequestParams) => {
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

  useEffect(() => {
    fetchData(defaultPagination);
    // ignore defaultPagination changes - we only want to use this once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  return {
    loading,
    items,
    onPaginationChange,
    pagination: {
      current,
      pageSize,
      total,
    } as IPagination,
  };
}

export default useDepositList;
