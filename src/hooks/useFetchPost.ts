import { useState, useEffect } from 'react';
import { fetchComments, fetchPosts } from '../api/jsonPlaceHolder';
import { Comments, Post } from '../types/data';

export const useFetchPost = (endpoint: string) => {
  const [post, setPost] = useState<Post>();
  const [comment, setComment] = useState<Comments[]>();
  const [loading1, setLoading1] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading1(true);
        const posts = await fetchPosts(endpoint);
        setPost(posts);
        const result = await fetchComments(endpoint);
        setComment(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading1(false);
      }
    };
    getData();
  }, [endpoint]);

  return { post, comment, loading1, error };
};