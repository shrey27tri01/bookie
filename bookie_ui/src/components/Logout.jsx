import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../Contexts/AuthContext';


export default function Logout() {
	const navigate = useNavigate();

	const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth();

	useEffect(() => {
		const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('user_name');
		localStorage.removeItem('user_id');
		axiosInstance.defaults.headers['Authorization'] = null;

		setIsLoggedIn(false);
        setAuthUser(null);

		navigate('/login');
		window.location.reload();
	});
	return <div>Logout</div>;
}