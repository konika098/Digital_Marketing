import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../Components/SharedComponent/Menubar';
import Footer from '../Components/SharedComponent/Footer/Footer';

const Main = () => {
    return (
        <>
        <Menubar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default Main;