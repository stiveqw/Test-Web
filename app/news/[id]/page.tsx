import { Metadata } from 'next'
import WelcomeSection from '@/app/components/WelcomeSection'
import NewsItemContent from './NewsItemContent'

interface NewsItemDetail {
  id: number;
  image: string;
  title: string;
  description: string;
  detailedDescription: string;  // 이 줄을 추가합니다
}

interface NewsData {
  welcomeTitle: string;
  welcomeDescription: string;
  welcomeBackgroundImage: string;
  newsItem: NewsItemDetail;
}

async function fetchNewsItemData(id: string): Promise<NewsData> {
  try {
    const res = await fetch(`http://localhost:3000/api/news/${id}`, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch news item data:', error)
    return {
      welcomeTitle: "뉴스 상세",
      welcomeDescription: "뉴스 아이템의 상세 내용을 확인하세요.",
      welcomeBackgroundImage: "/image/news/fallback-news.jfif",
      newsItem: {
        id: 0,
        image: "/image/news/fallback-news.jfif",
        title: "뉴스 아이템을 불러올 수 없습니다",
        description: "현재 기술적인 문제가 발생했습니다. 나중에 다시 확인해 주세요.",
        detailedDescription: "상세 설명을 불러올 수 없습니다."
      }
    }
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id
  const newsData = await fetchNewsItemData(id)
  return {
    title: `${newsData.newsItem.title} | 우리 대학교 뉴스`,
    description: newsData.newsItem.description,
  }
}

export default async function NewsItemPage({ params }: { params: { id: string } }) {
  const id = params.id
  const newsData = await fetchNewsItemData(id)

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <WelcomeSection 
          title={newsData.welcomeTitle}
          description={newsData.welcomeDescription}
          backgroundImage={newsData.welcomeBackgroundImage}
        />
        <div className="container mx-auto px-4 py-8">
          <NewsItemContent newsItem={newsData.newsItem} />
        </div>
      </main>
    </div>
  )
}

