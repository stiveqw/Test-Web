import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const festivalData = {
      welcomeTitle: "축제 정보",
      welcomeDescription: "다가오는 축제 일정과 정보를 확인하세요.",
      welcomeBackgroundImage: "/image/festival/festival-back.jfif",
      subtitle: "Festival"
    }
    return NextResponse.json(festivalData)
  } catch (error) {
    console.error('Error in /api/festival:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

