import './globals.css'
import type { Metadata } from 'next'
import TopBar from './components/TopBar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: '웹앱 메인',
  description: '웹앱 메인 페이지입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-black text-white">
        <TopBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

