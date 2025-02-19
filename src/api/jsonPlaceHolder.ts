const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return await res.json();
};

export const createPost = async (endpoint: string, data: { title: string; body: string }) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Failed to create post');
  // console.log(await res.json())
  return await res.json();
}

export const fetchComments = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}/${endpoint}/comments`);
  if (!res.ok) throw new Error('Failed to fetch');
  return await res.json();
}