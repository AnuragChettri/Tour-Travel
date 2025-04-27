import React from 'react';
import {createBrowserRouter,Outlet} from 'react-router-dom';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Home from './components/Home.jsx';
import Motion from './components/Motion.jsx';
import Navbar from './components/Navbar.jsx';
import MultiLevelNavbar from './components/MultiLevelNavbar.jsx';
import DestinationList from './components/DestinationList.jsx';
import Footer from './components/Footer.jsx';
import PlaceInfo from './components/PlaceInfo.jsx';
import Contact from './components/Contact.jsx';

const AppBody = ()=>{
    console.log("Hello");
    return (
        <div>
            <MultiLevelNavbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppBody />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/destinationList/:name",
                element: <DestinationList/>
            },
            {
                path: "/destination/place/:id",
                element: <PlaceInfo />
            }
        ]
    }
]);

