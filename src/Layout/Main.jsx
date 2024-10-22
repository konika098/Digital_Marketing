import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../Components/SharedComponent/Menubar';

const Main = () => {
    return (
        <>
        <Menubar/>
        <Outlet/>
        </>
    );
};

export default Main;