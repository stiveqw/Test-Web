'use client'

import { useState, useEffect } from 'react'

interface Course {
  id: string;
  name: string;
  instructor: string;
  credits: number;
}

export default function CourseRegistrationForm() {
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch('/api/course-registration')
      const data = await response.json()
      setCourses(data.courses)
    }
    fetchCourses()
  }, [])

  const handleCourseSelection = (courseId: string) => {
    setSelectedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the selectedCourses to your backend
    console.log('Selected courses:', selectedCourses)
    alert('수강신청이 완료되었습니다.')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Available Courses</h3>
      {courses.map(course => (
        <div key={course.id} className="mb-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCourses.includes(course.id)}
              onChange={() => handleCourseSelection(course.id)}
              className="form-checkbox"
            />
            <span>{course.name} - {course.instructor} ({course.credits} credits)</span>
          </label>
        </div>
      ))}
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        수강신청
      </button>
    </form>
  )
}

