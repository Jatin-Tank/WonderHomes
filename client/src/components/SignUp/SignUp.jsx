import styles from './styles.module.css'
import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { request } from '../../util/fetchAPI'
import {signUp} from "../../util/axiosAPI.js";



export default function SignUp() {

	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const requestBody = JSON.stringify({
			username: data.username,
			email: data.email,
			password: data.password
		})
		const successFunction = (res) => {
			if(res && res.others.email){
				navigate("/auth/Login");
			}
		}
		const failureFunction = (err) => {
			console.log(err)
		}
		signUp(requestBody, successFunction, failureFunction)

	};
	// console.log(data);
	return (

		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/auth/Login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						{/* <form className={styles.form_container} method='post'> */}
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="username"

							onChange={handleChange}
							value={data.username}
							required
							className={styles.input}
						/>
						{/* <input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/> */}
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
