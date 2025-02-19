import { useState, useEffect } from 'react';
import { fetchComments, fetchPosts } from '../api/jsonPlaceHolder';
import { Comment, Post } from '../interfaces/data';

export const useFetchPost = (endpoint: string) => {
  const [post, setPost] = useState<Post>();
  const [comment, setComment] = useState<Comment[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const posts = await fetchPosts(endpoint);
        setPost(posts);
        const result = await fetchComments(endpoint);
        setComment(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint]);

  return { post, comment, loading, error };
};