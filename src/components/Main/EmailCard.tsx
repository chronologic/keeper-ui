import React, { useCallback, useContext, useEffect } from "react";
import { Input, Button, Form } from "antd";

import mail from "../../img/mail.svg";
import { UserContext } from "../../contexts";
import InputCard from "./InputCard";

const emailRegex = /^([a-zA-Z0-9_\-+.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i;

function EmailCard() {
  const { user, loading, onUpdate } = useContext(UserContext);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ email: user?.email });
  }, [form, user]);

  const handleSubmit = useCallback(async () => {
    const { email } = await form.validateFields();
    onUpdate({ email });
  }, [form, onUpdate]);

  return (
    <InputCard
      icon={<img src={mail} className="circle-icon" alt="mail" />}
      title="Email"
    >
      <Form form={form} name="emailForm">
        <Form.Item
          name="email"
          label=""
          rules={[
            {
              required: true,
              message: "Please provide your email",
            },
            {
              pattern: emailRegex,
              message: "Please provide valid email",
            },
          ]}
        >
          <Input placeholder="Email" disabled={loading} />
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

export default EmailCard;
