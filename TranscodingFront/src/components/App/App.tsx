import React from 'react';
import { useDetectOs } from '../../hooks/useDetectOs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainRoutes, PlayerRoutes } from '../../shared/constants/routes';
import { Main } from '../../pages/Main/Main';
import { Player } from '../../pages/Player/Player';

export const App = () => {
    
    useDetectOs();

    const router = createBrowserRouter([

        {
            path: MainRoutes.route,
            element: <Main />,
        },
        {
            path: PlayerRoutes.route,
            element: <Player />,
        },

    ]);

    return <RouterProvider router={router} />;

};
