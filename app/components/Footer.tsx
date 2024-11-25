const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold">우리 대학교</h3>
            <p className="mt-2">123 대학로, 서울특별시</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <p>&copy; 2023 우리 대학교. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <a href="#" className="text-gray-300 hover:text-white mr-4">개인정보 처리방침</a>
            <a href="#" className="text-gray-300 hover:text-white">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

