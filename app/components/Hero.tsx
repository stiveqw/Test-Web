export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/main/welcome-background.jfif')",
          opacity: 0.3
        }}
      />
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          환영합니다
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          이곳에 당신의 웹사이트에 대한 간단한 소개나 캐치프레이즈를 넣어보세요.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            자세히 알아보기
          </a>
        </div>
      </div>
    </div>
  )
}

