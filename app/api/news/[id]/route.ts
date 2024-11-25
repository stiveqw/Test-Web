import { NextRequest, NextResponse } from 'next/server'
import { newsItems } from '../route'

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = parseInt(context.params.id)
    const newsItem = newsItems.find(item => item.id === id)

    if (!newsItem) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 })
    }

    const newsData = {
      welcomeTitle: "최신 뉴스",
      welcomeDescription: "우리 대학의 최신 소식을 확인하세요.",
      welcomeBackgroundImage: "/image/news/fallback-news.jfif",
      newsItem: {
        title: newsItem.title,
        image: newsItem.image,
        description: newsItem.description,
        detailedDescription: newsItem.detailedDescription || "상세 설명이 준비 중입니다. 곧 업데이트하겠습니다."
      }
    }
    
    return NextResponse.json(newsData)
  } catch (error) {
    console.error('Error in /api/news/[id]:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

