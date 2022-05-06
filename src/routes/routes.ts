import { EditUser, Users } from 'pages';
import React, { FC } from 'react';
import { RouteProps } from 'react-router-dom';

export const routes = [
    {
        element: Users,
        path: '/',
    },
    {
        element: EditUser,
        path: '/EditUser/:id',
    },
];
