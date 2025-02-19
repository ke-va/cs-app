import { useFetchPost } from '../hooks/useFetchPost';
import PostList from '../components/PostList';
import { Post } from '../types/data';

const Home = () => {
  const { post, loading1 } = useFetchPost('posts');
  if (loading1) return <p>Loading...</p>;
  return <PostList posts={post as unknown as Post[]} />;
};
export default Home;