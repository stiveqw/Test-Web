'use client'

import { useState, useEffect } from 'react'
import WelcomeSection from '../components/WelcomeSection'
import NewsItem from '../components/NewsItem'
import Pagination from '../components/Pagination'

interface NewsItemType {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface NewsData {
  welcomeTitle: string;
  welcomeDescription: string;
  welcomeBackgroundImage: string;
  subtitle: string;
  newsItems: NewsItemType[];
  totalPages: number;
}

async function fetchNewsData(page: number): Promise<NewsData> {
  const res = await fetch(`http://localhost:3000/api/news?page=${page}`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch news data')
  }
  return res.json()
}

export default function NewsPage() {
  const [newsData, setNewsData] = useState<NewsData | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const loadNewsData = async () => {
      try {
        const data = await fetchNewsData(currentPage)
        setNewsData(data)
      } catch (error) {
        console.error('Error loading news data:', error)
      }
    }

    loadNewsData()
  }, [currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  if (!newsData) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-[50px]">
        <WelcomeSection 
          title={newsData.welcomeTitle}
          description={newsData.welcomeDescription}
          backgroundImage={newsData.welcomeBackgroundImage}
        />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center my-8">
          {newsData.subtitle}
        </h2>
        {newsData.newsItems && newsData.newsItems.length > 0 ? (
          <>
            <div className="bg-white p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-0.5 mb-12">
                {newsData.newsItems.map((item: NewsItemType) => (
                  <div key={item.id} className="w-[80%] mx-auto">
                    <NewsItem
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      height="h-128"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={newsData.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        ) : (
          <p className="text-white text-center">현재 표시할 뉴스 항목이 없습니다.</p>
        )}
      </main>
    </div>
  )
}

