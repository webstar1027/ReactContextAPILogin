// Define routes of test project

import React from "react";
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import PageNotFound from '../Pages/NotFound';

const routes =[
	{
		path:'/',
		component: Login,
		isAuthenticated: false,
	},
	{
		path:'/dashboard',
		component: Dashboard,
		isAuthenticated: true,
	},
	{
		path:'/*',
		component: PageNotFound,
		isAuthenticated: true,
	},
];
 
export default routes;