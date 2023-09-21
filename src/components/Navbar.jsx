import React from 'react';
import Maincontent from './Maincontent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItems = <>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        
    </>
    return (

        <div className=''>
            <Sidebar></Sidebar>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-black text-white">
                        <div className="navbar-start md:hidden">
                            <label htmlFor="my-drawer-3" className="cursor-pointer">
                                <div className='flex gap-2 items-center ms-8'>
                                    <span>Menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                                </div>
                            </label>
                        </div>
                        <div className='navbar-end md:hidden'>
                            <label htmlFor="check" className='cursor-pointer'>
                                <div className='flex gap-2 items-center sidebar-drawer'>
                                    <span>Sidebar</span>
                                    <FontAwesomeIcon className='text-xl mr-6' id='btn' icon={faBars} />
                                </div>
                            </label>

                        </div>

                        <div className="justify-center hidden md:flex ">
                            <ul className="menu menu-horizontal md:ms-10 md:ps-28 md:gap-8 lg:ms-16 lg:ps-52 lg:gap-10 xl:ms-20 xl:ps-80 xl:gap-16">
                                {/*------------ Navbar menu content here -----------------*/}
                                {navItems}
                            </ul>
                        </div>
                    </div>

                    {/*--------------- Page content here------------ */}
                    <Maincontent></Maincontent>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        {navItems}
                    </ul>
                </div>

            </div>
        </div>

    );
};

export default Navbar;