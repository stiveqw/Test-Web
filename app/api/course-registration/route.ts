import { NextResponse } from 'next/server'

const courses = [
  { id: '1', name: '웹 프로그래밍 기초', instructor: '김교수', credits: 3 },
  { id: '2', name: '데이터베이스 개론', instructor: '이교수', credits: 3 },
  { id: '3', name: '알고리즘의 이해', instructor: '박교수', credits: 4 },
  { id: '4', name: '인공지능 입문', instructor: '최교수', credits: 3 },
  { id: '5', name: '컴퓨터 네트워크', instructor: '정교수', credits: 3 },
]

export async function GET() {
  try {
    const courseData = {
      welcomeTitle: "수강신청",
      welcomeDescription: "원하는 강좌를 찾아 수강신청 하세요.",
      welcomeBackgroundImage: "/image/main/welcome-background.jfif",
      subtitle: "Course registration",
      courses: courses
    }
    return NextResponse.json(courseData)
  } catch (error) {
    console.error('Error in /api/course-registration:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

