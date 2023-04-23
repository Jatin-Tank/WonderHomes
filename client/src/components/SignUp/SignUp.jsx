import styles from './styles.module.css'
import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { request } from '../../util/fetchAPI'



export default function SignUp() {

    const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		// alert('handle submit');
		e.preventDefault();
		try {
			// const url = "http://localhost:8080/api/users";
			// const { data: res } = await axios.post(url, data);
			const headers={
				'content-type':"application/json"
			}
			const hi=await request('/auth/SignUp','POST',headers,{...data})
			navigate("/auth/Login");
			console.log(hi);
		} catch (error) {
			// if (
			// 	error.response &&
			// 	error.response.status >= 400 &&
			// 	error.response.status <= 500
			// ) {
			// 	setError(error.response.data.message);
			// }
			console.log(error)
		}
	};
console.log(data);


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
					<form className={styles.form_container}  onSubmit={handleSubmit}>
					{/* <form className={styles.form_container}  action='/auth/SignUp' method='POST'> */}
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
				 
							onChange={handleChange}
							value={data.name}
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
