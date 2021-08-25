import React, { useState } from 'react'; 
import styles from './login.module.css';
import { loginUser, useAuthState, useAuthDispatch } from '../../Context';

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
 
	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();

	const handleLogin = async (e) => {
		e.preventDefault();
		
		try {
			let response = await loginUser(dispatch, { email, password });
			if (!response.user) return;
			props.history.push('/dashboard');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<h1>
					Login Page
					{
						errorMessage ? <p className={styles.error}>{errorMessage}</p> : null
					}
				</h1>

				<form>
					<div className={styles.loginForm}>
						<div className={styles.loginFormItem}>
							<label htmlFor='email'>Username</label>
							<input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading}/>
						</div>
						<div className={styles.loginFormItem}>
							<label htmlFor='password'>Password</label>
							<input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading}/>
						</div>
					</div>
					<button onClick={handleLogin} disabled={loading}>login</button>
				</form>
			</div>
		</div>
	);
}
 
export default Login;