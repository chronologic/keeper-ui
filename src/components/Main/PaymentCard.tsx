import React, { useCallback, useContext, useEffect, useState } from "react";
import { InputNumber, Button, Form, notification } from "antd";
import { ethers } from "ethers";
import EthForwarder from "keeper-payment-contract/artifacts/EthForwarder.json";

import { CHAIN_ID, MIN_PAYMENT_ETH } from "../../env";
import eth from "../../img/eth.svg";
import { EthersContext } from "../../contexts";
import { numberToBn } from "../../utils";
import InputCard from "./InputCard";

function PaymentCard() {
  const { provider } = useContext(EthersContext);
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    if (txHash) {
      confirmTx(txHash);
    }

    async function confirmTx(hash: string) {
      setLoading(true);
      try {
        await provider?.waitForTransaction(hash);
        notification.success({
          message: "Transaction confirmed",
          description:
            "Please allow a couple of minutes for the system to update your balance",
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        notification.error({ message: "Failed to confirm transaction" });
      } finally {
        setLoading(false);
        setTxHash("");
      }
    }
  }, [provider, txHash]);

  const handleSubmit = useCallback(async () => {
    const { ethAmount } = await form.validateFields();
    try {
      const ethForwarderContract = new ethers.Contract(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (EthForwarder.networks as any)[`${CHAIN_ID}`]?.address,
        EthForwarder.abi,
        provider?.getSigner()
      );
      const res = await ethForwarderContract.functions.pay({
        value: numberToBn(ethAmount),
      });

      setTxHash(res.hash);

      notification.success({
        message: "Transaction broadcasted",
        description: "Please wait for the transaction to be confirmed",
      });
    } catch (e) {
      notification.error({ message: "Transaction failed" });
    }
  }, [form, provider]);

  return (
    <InputCard
      icon={<img src={eth} className="circle-icon" alt="eth" />}
      title="Provide payment"
    >
      <Form form={form} name="paymentForm">
        <Form.Item
          name="ethAmount"
          label=""
          rules={[
            {
              required: true,
              message: "Please provide ETH amount",
            },
            {
              type: "number",
              min: MIN_PAYMENT_ETH,
              message: `Minimum amount is ${MIN_PAYMENT_ETH}`,
            },
          ]}
        >
          <InputNumber
            placeholder={`Min ${MIN_PAYMENT_ETH} ETH`}
            disabled={loading}
          />
        </Form.Item>
        <Button
          type="primary"
          formAction="submit"
          loading={loading}
          onClick={handleSubmit}
        >
          Deposit
        </Button>
      </Form>
    </InputCard>
  );
}

export default PaymentCard;
