import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'


const reviews = [
  {
    id: 1,
    title: "Review title",
    body: "Review body",
    reviewer: "Reviewer name",
    rating: 0,
    avatar: "https://i.postimg.cc/DZysb29C/amy-hirschi-b3-AYk8-HKCl0-unsplash.jpg"
  },
  {
    id: 2,
    title: "Review title",
    body: "Review body",
    reviewer: "Reviewer name",
    rating: 0,
    avatar: "https://i.postimg.cc/DZysb29C/amy-hirschi-b3-AYk8-HKCl0-unsplash.jpg"
  },
  {
    id: 3,
    title: "Review title",
    body: "Review body",
    reviewer: "Reviewer name",
    rating: 0,
    avatar: "https://i.postimg.cc/DZysb29C/amy-hirschi-b3-AYk8-HKCl0-unsplash.jpg"
  }
]

export default function Reviews() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6 text-left">Latest reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="p-6 bg-gray-50 rounded-lg">
            <div className="flex mb-2">
              {[...Array(5)].map((_, index) => (
                <AiOutlineStar key={index} className="w-5 h-5 text-gray-300" />
              ))}
            </div>
            <h3 className="font-medium mb-1 text-left">{review.title}</h3>
            <p className="text-gray-600 text-sm mb-4 text-left">{review.body}</p>
            <div className="flex items-center">
              <img
                src={review.avatar}
                alt=""
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm text-gray-600">{review.reviewer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

