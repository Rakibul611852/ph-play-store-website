import React from 'react'

const Stats = () => {
  return <div className="bg-purple-500 h-[40vh] text-white flex flex-col justify-center items-center text-center px-4">
  
  {/* Title */}
  <h2 className="text-3xl md:text-5xl font-bold mb-8">
    Trusted by Millions, Built for You
  </h2>

  {/* Stats Section */}
  <div className="flex flex-col md:flex-row gap-50 mt-2 ">
    
    <div className='space-y-4'>
      <p>Total Downloads</p>
      <h1 className="text-6xl font-bold">29.6M</h1>
      <p>21% more than last month</p>
    </div>

    <div className='space-y-4'>
      <p>Total Reviews</p>
      <h1 className="text-6xl font-bold">906K</h1>
      <p>46% more than last month</p>
    </div>

    <div className='space-y-4'>
      <p>Active Apps</p>
      <h1 className="text-6xl font-bold">132+</h1>
      <p>31 more will Launch</p>
    </div>

  </div>

</div>
    

}

export default Stats;