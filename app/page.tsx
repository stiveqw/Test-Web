import WelcomeSection from './components/WelcomeSection'

async function fetchMainData() {
  try {
    const res = await fetch('http://localhost:3000/api/main', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch main data:', error)
    return {
      welcomeTitle: "우리 대학교",
      welcomeDescription: "현재 기술적인 문제가 발생했습니다. 나중에 다시 확인해 주세요.",
      welcomeBackgroundImage: "/image/main/welcome-background.jfif"
    }
  }
}

export default async function Home() {
  const mainData = await fetchMainData()

  return (
    <WelcomeSection 
      title={mainData.welcomeTitle}
      description={mainData.welcomeDescription}
      backgroundImage={mainData.welcomeBackgroundImage}
    />
  )
}

