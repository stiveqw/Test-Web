// eslint-disable-next-line prefer-const
export let posts = [
  { id: 1, title: '첫 번째 게시물', content: '이것은 첫 번째 게시물입니다.' },
  { id: 2, title: '두 번째 게시물', content: '이것은 두 번째 게시물입니다.' },
]

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newPost = {
    id: posts.length + 1,
    title: body.title,
    content: body.content,
  }
  posts.push(newPost)
  return NextResponse.json(newPost, { status: 201 })
}

