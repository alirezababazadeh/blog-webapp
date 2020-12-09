import React, { useEffect } from 'react';
import axiosInstance from '../../axios.js';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
	const history = useHistory();

	useEffect(() => {
		axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/');
	});
	return <div>Logout</div>;
}