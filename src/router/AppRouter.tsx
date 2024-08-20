// src/AppRouter.tsx
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from 'react-router-dom';
import Header from '../components/nav/header';
import Footer from '../components/footer/footer';
import Home from '../pages/home';
import About from '../pages/about';

const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
]);

const AppRouter: React.FC = () => (
    <RouterProvider router={router} />
);

export default AppRouter;
