import React, { useCallback, useContext, useEffect, useState } from "react";
import { Input, Button, Form } from "antd";

import shield from "../../img/shield.svg";
import { UserContext } from "../../contexts";
import InputCard from "./InputCard";

const ethereumRegex = /^0x[a-fA-F0-9]{40}$/g;

function AddressCard() {
  const { user, loading, onUpdate } = useContext(UserContext);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ operatorAddress: user.operatorAddress });
  }, [form, user.operatorAddress]);

  const handleSubmit = useCallback(async () => {
    const { operatorAddress } = await form.validateFields();
    onUpdate({ operatorAddress });
  }, [form, onUpdate]);

  return (
    <InputCard
      icon={<img src={shield} className="circle-icon" alt="shield" />}
      title="Operator Address"
    >
      <Form form={form} name="addressForm">
        <Form.Item
          name="address"
          label=""
          rules={[
            {
              required: true,
              message: "Please provide your ETH Address",
            },
            {
              pattern: ethereumRegex,
              message: "Please provide valid ETH Address",
            },
          ]}
        >
          <Input placeholder="ETH Address" disabled={loading} />
        </Form.Item>
        <Button
          type="link"
          formAction="submit"
          loading={loading}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </InputCard>
  );
}

export default AddressCard;
