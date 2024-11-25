import WelcomeSection from '../components/WelcomeSection'
import CourseRegistrationForm from '../components/CourseRegistrationForm'

interface CourseRegistrationData {
  welcomeTitle: string;
  welcomeDescription: string;
  welcomeBackgroundImage: string;
  subtitle: string;
  courses: Array<{
    id: string;
    name: string;
    instructor: string;
    credits: number;
  }>;
}

async function fetchCourseRegistrationData(): Promise<CourseRegistrationData> {
  try {
    const res = await fetch('http://localhost:3000/api/course-registration', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch course registration data:', error)
    return {
      welcomeTitle: "수강신청",
      welcomeDescription: "원하는 강좌를 찾아 수강신청 하세요.",
      welcomeBackgroundImage: "/image/main/welcome-background.jfif",
      subtitle: "Course Registration",
      courses: []
    }
  }
}

export default async function CourseRegistrationPage() {
  const courseRegistrationData = await fetchCourseRegistrationData()

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-[50px]">
        <WelcomeSection 
          title={courseRegistrationData.welcomeTitle}
          description={courseRegistrationData.welcomeDescription}
          backgroundImage={courseRegistrationData.welcomeBackgroundImage}
        />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center my-8">
          {courseRegistrationData.subtitle}
        </h2>
        <CourseRegistrationForm />
      </main>
    </div>
  )
}

