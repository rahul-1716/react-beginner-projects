import React from 'react'

const trends = [
  { title: "Be the person you are on vacation", author: "Maren Torff" },
  { title: "Embrace the joy of doing nothing", author: "Alex Rivera" },
  { title: "Finding balance in a digital world", author: "Jordan Lee" }
];



const TrendsList = () => {
  return (
    <div className='bg-white p-4 rounded-lg shadow mt-8'>
      <h3 className="font-semibold text-lg mb-4">Today's Top Trends</h3>
      <ul className="space-y-4">
        {trends.map((trend, idx) => (
            <li key={idx} className='flex flex-col'>
                <span className="font-medium">{trend.title}</span>
                <span className="text-sm text-gray-500">{trend.author}</span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TrendsList
