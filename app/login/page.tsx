import WelcomeSection from '../components/WelcomeSection'
import LoginForm from '../components/LoginForm'

interface LoginData {
  welcomeTitle: string;
  welcomeDescription: string;
  welcomeBackgroundImage: string;
}

async function fetchLoginData(): Promise<LoginData> {
  // 실제 환경에서는 이 데이터를 API에서 가져올 수 있습니다.
  return {
    welcomeTitle: "로그인",
    welcomeDescription: "계정에 로그인하여 서비스를 이용하세요.",
    welcomeBackgroundImage: "/image/main/welcome-background.jfif"
  }
}

export default async function LoginPage() {
  const loginData = await fetchLoginData()

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-[50px]">
        <WelcomeSection 
          title={loginData.welcomeTitle}
          description={loginData.welcomeDescription}
          backgroundImage={loginData.welcomeBackgroundImage}
        />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center my-8">
          Login
        </h2>
        <div className="max-w-md mx-auto">
          <LoginForm />
        </div>
      </main>
    </div>
  )
}

