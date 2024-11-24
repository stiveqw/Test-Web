'use client'

import { useState, useEffect } from 'react'

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Home() {
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">게시물 목록</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

