import PostCard from './PostCard';
import { Post } from '../types/data';
import { Row, Col } from 'antd';

const PostList = ({ posts }: { posts: Post[] }) => (
  <Row gutter={[16, 16]}>
    {posts.map(post => (
      <Col key={post.id} span={8}>
        <PostCard post={post} />
      </Col>
    ))}
  </Row>
);

export default PostList;