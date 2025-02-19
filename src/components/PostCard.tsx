import { Link } from 'react-router-dom';
import { Post } from '../interfaces/data';
import { Card, Col, Row } from 'antd';

const PostCard = ({ post }: { post: Post }) => (
  <div> 
    <Row gutter={16}>
      <Col span={16} xs={24}>
        <Card title={`${post.title}`} extra={<Link to={`/details/${post.id}`}>Read more</Link>}>
        <p>{post.body}</p>
        </Card>
      </Col>
    </Row>
  </div>
);

export default PostCard;
