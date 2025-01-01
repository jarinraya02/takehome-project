import React from 'react'
import { Link } from 'react-router-dom'
import BlogList from '../components/Blogs/BlogList'

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 mt-12">
       
        <BlogList />
      </div>
      
    </>
  )
}
