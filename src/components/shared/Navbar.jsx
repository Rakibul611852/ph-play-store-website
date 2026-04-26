import React from 'react'

import logoImg from "../../assets/images/logo.png"
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import MyNavLink from './MyNavLink';

const Navbar = () => {

const navItems =[
    {
        path:"/",
        text:"Home",
    },
    {
        path:"/apps",
        text:"Apps",
    },
    {
        path:"/installedApps",
        text:"Installation",
    },
]

  return (
    <nav className='shadow'>
        <div className="flex justify-between items-center py-[8px] gap-4 container mx-auto">
           <img src={logoImg} alt="" className=' w-[50px]' />

                <ul className='flex justify-between items-center gap-8'>
                    {
                      navItems.map ((item,ind)=> <MyNavLink to={item.path} key={ind}>{item.text}</MyNavLink>)  
                    }
                </ul>
                
                <button className='btn bg-purple-500 text-white'><FaGithub />Contribute</button>
        </div>
    </nav>
  )
}

export default Navbar;