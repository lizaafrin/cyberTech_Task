import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
         <Outlet></Outlet>
        </div>
    );
};

export default Main;