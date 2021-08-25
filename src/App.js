import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import routes from './Config/routes.js';
import { AuthProvider } from './Context';
import AppRoute from './Components/AppRoutes';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					{routes.map((route) => (
						<AppRoute
							key={route.path}
							path={route.path}
							component={route.component}
							isAuthenticated={route.isAuthenticated}
						/>
					))}
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
