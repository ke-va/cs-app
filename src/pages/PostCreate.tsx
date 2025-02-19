import React from 'react';
import { createPost } from '../api/jsonPlaceHolder';
import { Button, Form, Input } from 'antd';
import type { FormProps } from 'antd';

type FieldType = {
  title: string;
  body: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
  const res = await createPost('posts', { title: values!.title, body: values!.body });
  console.log('res', res)
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const PostCreate: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Title"
      name="title"
      rules={[{ required: true, message: 'Please input your title!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Body"
      name="body"
      rules={[{ required: true, message: 'Please input your body message!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default PostCreate;