import React from 'react';
import { deletePost } from '../api/jsonPlaceHolder';
import { Button, Form, InputNumber } from 'antd';
import type { FormProps } from 'antd';

type FieldType = {
  id: number;
};

const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
  const res = await deletePost('posts', values!.id);
  console.log(res);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const PostDelete: React.FC = () => (
  <Form
    name="basic"
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, margin: '16px auto', textAlign: 'center' }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Id"
      name="id"
      rules={[{ required: true, message: 'Please input your post id!' }]}
    >
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default PostDelete;