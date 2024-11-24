import { NextResponse } from 'next/server'

// 외부에서 posts 배열에 접근할 수 있도록 합니다.
import { posts } from '../route'

// GET 요청 처리 (특정 게시물 조회)
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const post = posts.find(p => p.id === id)
  
  if (!post) {
    return NextResponse.json({ error: '게시물을 찾을 수 없습니다.' }, { status: 404 })
  }
  
  return NextResponse.json(post)
}

// PUT 요청 처리 (특정 게시물 수정)
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const body = await request.json()
  const index = posts.findIndex(p => p.id === id)
  
  if (index === -1) {
    return NextResponse.json({ error: '게시물을 찾을 수 없습니다.' }, { status: 404 })
  }
  
  posts[index] = { ...posts[index], ...body }
  return NextResponse.json(posts[index])
}

// DELETE 요청 처리 (특정 게시물 삭제)
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const index = posts.findIndex(p => p.id === id)
  
  if (index === -1) {
    return NextResponse.json({ error: '게시물을 찾을 수 없습니다.' }, { status: 404 })
  }
  
  const deletedPost = posts.splice(index, 1)[0]
  return NextResponse.json(deletedPost)
}

