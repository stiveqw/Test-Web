import TopBar from '../components/TopBar'
import WelcomeSection from '../components/WelcomeSection'
import Footer from '../components/Footer'

interface FestivalData {
  welcomeTitle: string;
  welcomeDescription: string;
  welcomeBackgroundImage: string;
  subtitle: string;
}

async function fetchFestivalData(): Promise<FestivalData> {
  try {
    const res = await fetch('http://localhost:3000/api/festival', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch festival data:', error)
    return {
      welcomeTitle: "축제",
      welcomeDescription: "현재 기술적인 문제가 발생했습니다. 나중에 다시 확인해 주세요.",
      welcomeBackgroundImage: "/image/festival/festival-back.jfif",
      subtitle: "Festival"
    }
  }
}

export default async function Festival() {
  const festivalData = await fetchFestivalData()

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <TopBar />
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-[50px]">
        <WelcomeSection 
          title={festivalData.welcomeTitle}
          description={festivalData.welcomeDescription}
          backgroundImage={festivalData.welcomeBackgroundImage}
        />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center my-8">
          {festivalData.subtitle}
        </h2>
        {/* 여기에 축제 컨텐츠를 추가할 수 있습니다 */}
      </main>
      <Footer />
    </div>
  )
}

