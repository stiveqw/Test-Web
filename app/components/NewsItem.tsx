'use client'

import Image from 'next/image'
import Link from 'next/link'

interface NewsItemProps {
  id: number;
  image: string;
  title: string;
  description: string;
  height?: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ id, image, title, description, height = 'h-48' }) => {
  return (
    <Link href={`/news/${id}`} className={`block bg-gray-800 rounded-lg overflow-hidden ${height} hover:shadow-lg transition-shadow duration-300`}>
      <div className={`relative ${height} md:h-3/4`}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/image/news/fallback-news.jfif";
          }}
        />
      </div>
      <div className="p-4 md:h-1/4 overflow-auto">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  )
}

export default NewsItem

