'use client'

import { useState, useEffect } from 'react'

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <h1>게시물 목록</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

