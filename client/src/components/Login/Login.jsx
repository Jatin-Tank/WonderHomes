import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { request } from "../../util/fetchAPI";


import {login} from "../../util/axiosAPI.js";
// import {useDispatch} from 'react-redux'

const Login = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	//const dispatch = useDispatch();


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const successFunction = (res) => {
			console.log(res.others);
			if(res.others.email){
				// dispatch({})
				navigate('/')
			}


			
		}
		const failureFunction = (err) => {
			console.log(err)
		}
		login( data.email, data.password, successFunction, failureFunction)






		// e.preventDefault();
		// try {
		// 	// const url = "http://localhost:8080/api/auth";
		// 	// const { data: res } = await axios.post(url, data);
		// 	// localStorage.setItem("token", res.data);
		// 	// window.location = "/";
		// 	const options={
		// 		'content-type':'application/json'
		// 	}

		// 	const state= await request('/auth/Login','POST',options,{email,password})
		// 	dispatch(Login(state))
		// 	navigate("/")
		// } catch (error) {
		// 	if (
		// 		error.response &&
		// 		error.response.status >= 400 &&
		// 		error.response.status <= 500
		// 	) {
		// 		setError(error.response.data.message);
		// 	}
		// }
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
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
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/auth/Signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
