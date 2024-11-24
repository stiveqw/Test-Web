import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}

