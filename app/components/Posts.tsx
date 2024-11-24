'use client'

import { useState, useEffect } from 'react'

interface Post {
  id: number;
  title: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://your-api-url.com/posts')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data: Post[] = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
        setError('Failed to fetch posts. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Posts</h1>
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  )
}

