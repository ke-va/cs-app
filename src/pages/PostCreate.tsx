import React, { useState } from 'react';
import { createPost } from '../api/jsonPlaceHolder';

const PostCreate: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});

  const validate = () => {
    const newErrors: { title?: string; content?: string } = {};
    if (!title) newErrors.title = 'Title is required';
    if (!body) newErrors.content = 'Body is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form
      const res = await createPost('posts', { title, body });
      console.log(res)
      // Reset form
      setTitle('');
      setBody('');
      setErrors({});
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
        </div>
        <div>
          <label htmlFor="content">Body</label>
          <textarea
            id="content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {errors.content && <span style={{ color: 'red' }}>{errors.content}</span>}
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default PostCreate;