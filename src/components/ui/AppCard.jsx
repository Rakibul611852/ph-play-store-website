import React from 'react'
import { LuDownload } from 'react-icons/lu';
import { VscStarFull } from 'react-icons/vsc';

const AppCard = ({app}) => {
  return (
    <div className="card  shadow-xl border border-gray-200 bg-gray-200 ">
              <figure>
                <img
                  src= {app.image}
                  alt={app.title} 
                  className='w-full overflow-hidden p-5 '/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                 <div className='flex justify-between items-center gap-4'>
                    <span className='bg-green-100 p-2 border border-green-200 gap-2 rounded-md font-bold text-md flex items-center text-green-600 '> <LuDownload />{app.downloads}</span>
                    <span className='bg-orange-100 text-orange-600 gap-2 flex items-center rounded-md p-2 border border-gray-200 font-bold text-md '><VscStarFull />{app.ratingAvg}</span>
                 </div>
              </div>
            </div>
  )
}

export default AppCard;