'use client'

import Image from 'next/image'

interface WelcomeSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ title, description, backgroundImage }) => {
  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-4">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Welcome background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4">{title}</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{description}</p>
      </div>
    </section>
  )
}

export default WelcomeSection

