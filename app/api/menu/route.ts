import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const mainData = {
      welcomeTitle: "우리 대학교에 오신 것을 환영합니다",
      welcomeDescription: "최고의 교육과 연구 환경을 제공하는 우리 대학교에서 여러분의 꿈을 실현하세요.",
      welcomeBackgroundImage: "/image/main/welcome-background.jfif"
    }
    return NextResponse.json(mainData)
  } catch (error) {
    console.error('Error in /api/main:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

