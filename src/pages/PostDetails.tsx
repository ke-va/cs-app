import { useParams } from 'react-router-dom';
import { useFetchPost } from '../hooks/useFetchPost';
import { Card, Col, Row } from 'antd';

const PostDetails = () => {
  const { id } = useParams();
  const { post, comment, loading } = useFetchPost(`posts/${id}`);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Row gutter={16}>
        <Col span={12} xs={24}>
          <Card title={post?.title}>
            <p>{post?.body}</p>
              {comment!.map((c) => (
                <Card type="inner" title={c.email}>
                  <p>{c.body}</p>
                </Card>
              ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PostDetails;