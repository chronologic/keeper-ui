import { useState, useEffect, useCallback, useMemo, useContext } from "react";

import { MINUTE_MILLIS } from "../constants";
import { AuthContext } from "../contexts";
import { apiService } from "../services";
import usePrevious from "./usePrevious";

export interface IPagination extends IRequestParams {
  total: number;
}

interface IConfig extends IRequestParams {
  operatorAddress: string | undefined;
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

function useDepositList(config: IConfig) {
  const { authenticated } = useContext(AuthContext);
  const [items, setItems] = useState([] as IDeposit[]);
  const [pageSize, setPageSize] = useState(config.pageSize);
  const [current, setCurrent] = useState(config.current);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const currentOperator = useMemo(() => config.operatorAddress, [
    config.operatorAddress,
  ]);
  const previousOperator = usePrevious(config.operatorAddress);

  const fetchData = useCallback(
    async (params: IRequestParams) => {
      if (authenticated) {
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
      }
    },
    [authenticated]
  );

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
    pageSize,
    fetchData,
  ]);

  useEffect(() => {
    fetchData(config);
    // ignore config changes - we only want to use this once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  useEffect(() => {
    if (currentOperator !== previousOperator) {
      onRefresh();
    }
  }, [currentOperator, previousOperator, onRefresh]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        onRefresh();
      }
    }, 3 * MINUTE_MILLIS);

    return () => {
      clearInterval(interval);
    };
  }, [onRefresh]);

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
