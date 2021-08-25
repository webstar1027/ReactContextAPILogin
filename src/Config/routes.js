import React from 'react';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import NotFound from '../Pages/NotFound';

const routes = [
	{
		path: '/login',
		component: Login,
		isAuthenticated: false,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		isAuthenticated: true,
	},
	{
		path: '/*',
		component: NotFound,
		isAuthenticated: true,
	},
];

export default routes;
