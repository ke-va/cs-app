import { useFetchPost } from '../hooks/useFetchPost';
import PostList from '../components/PostList';
import { Post } from '../interfaces/data';

const Home = () => {
  const { post, loading } = useFetchPost('posts');

  if (loading) return <p>Loading...</p>;

  return <PostList posts={post as unknown as Post[]} />;
};

export default Home;