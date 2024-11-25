'use client'

import Image from 'next/image'
import Link from 'next/link'

interface NewsItemDetail {
  id: number;
  image: string;
  title: string;
  description: string;
  detailedDescription: string;  // 이 줄을 추가합니다
}

export default function NewsItemContent({ newsItem }: { newsItem: NewsItemDetail }) {
  const fallbackImage = "/image/news/fallback-news.jfif"

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center my-8 text-gray-800">
          {newsItem.title}
        </h1>
        <div className="bg-white p-4">
          <div className="relative h-[768px] mx-[80px] my-8">
            <Image
              src={newsItem.image || fallbackImage}
              alt={newsItem.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {newsItem.description}
          </p>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {newsItem.detailedDescription}
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link 
          href="/news"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          뉴스 목록으로 돌아가기
        </Link>
      </div>
    </>
  )
}

