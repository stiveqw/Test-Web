'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function TopBar() {
const [isOpen, setIsOpen] = useState(false)

return (
 <nav className="bg-white border-b">
   <div className="max-w-7xl mx-auto px-4">
     <div className="flex justify-between h-16">
       <div className="flex">
         <div className="flex-shrink-0 flex items-center">
           <Link href="/" className="font-bold text-xl text-gray-800">
             Logo
           </Link>
         </div>
         <div className="hidden md:ml-6 md:flex md:space-x-8">
           <Link 
             href="/" 
             className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500"
           >
             홈
           </Link>
           <Link 
             href="/about" 
             className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300"
           >
             소개
           </Link>
           <Link 
             href="/services" 
             className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300"
           >
             서비스
           </Link>
           <Link 
             href="/contact" 
             className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300"
           >
             연락처
           </Link>
         </div>
       </div>
       
       {/* 모바일 메뉴 버튼 */}
       <div className="md:hidden flex items-center">
         <button
           onClick={() => setIsOpen(!isOpen)}
           className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
         >
           <span className="sr-only">메뉴 열기</span>
           <svg
             className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
           </svg>
           <svg
             className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
           </svg>
         </button>
       </div>
     </div>
   </div>

   {/* 모바일 메뉴 */}
   <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
     <div className="pt-2 pb-3 space-y-1">
       <Link
         href="/"
         className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50"
       >
         홈
       </Link>
       <Link
         href="/about"
         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
       >
         소개
       </Link>
       <Link
         href="/services"
         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
       >
         서비스
       </Link>
       <Link
         href="/contact"
         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
       >
         연락처
       </Link>
     </div>
   </div>
 </nav>
)
}

