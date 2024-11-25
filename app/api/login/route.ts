import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { username, password } = body

  // 여기에서 실제 인증 로직을 구현해야 합니다.
  // 이 예제에서는 간단한 더미 응답만 제공합니다.
  if (username === 'user' && password === 'password') {
    return NextResponse.json({ message: 'Login successful' }, { status: 200 })
  } else {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }
}

