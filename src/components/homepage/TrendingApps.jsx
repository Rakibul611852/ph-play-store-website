import React, { use, useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { VscStarFull } from 'react-icons/vsc';
import { useLoaderData } from 'react-router-dom';
import AppCard from '../ui/AppCard';

// const appsPromise =fetch("/data.json").then ((res) => res.json())

const TrendingApps = () => {
  // const apps =use(appsPromise);
  // console.log (apps, "apps");

  // const data = useLoaderData()
  // console.log(data,"data from homepage")


  const [apps, setApps] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setApps(data);
    };
    fetchData();
  }, []);

 console.log(apps, "apps")

  return (
    <div className='container mx-auto'>
        <div>
           <h2 className='text-center text-4xl font-bold mt-[80px]'>Trending Apps</h2>
           <p className='text-center mt-2 text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
        </div>

       <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
         {apps.map((app, ind) => {
            return <AppCard app={app} key={ind}/>
          })}
       </div>

    </div>
  )
}

export default TrendingApps;