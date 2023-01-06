import React, { useState, useRef } from "react";

const AccountForm = ()=>  {
	const [formData, setFormData] = useState({
    username: "",
    password: "",
		confirmPassword: "",
  });
	const usernameRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const passwordFeedback = useRef();

	const handleSubmit= (e) => {
		e.preventDefault();
		// Business logic for form processing
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		if (e.target.name.toLowerCase().includes('password')) {
			validatePasswordMatch();
		}
	}

	const validatePasswordMatch = () => {
		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			passwordFeedback.current.innerText = "The values in the password fields do not match. Please confirm that both fields have identical values.";
			return;
		} else {
			passwordFeedback.current.innerText = "The values in the password fields are identical!";
			return;
 		}
	}

  return (
		<form className="account-form" onSubmit={e => {handleSubmit(e)}}>
			<div className="input-group">
				<label htmlFor="username">
					Username:
				</label>
				<input
					name="username"
					onChange={handleChange}
					ref={usernameRef}
					type="text"
					value={formData.username} />
			</div>
			<div className="input-group">
				<label htmlFor="password">
					Password:
				</label>
				<input
					name="password"
					onChange={handleChange}
					ref={passwordRef}
					type="password"
					value={formData.password} />
			</div>
			<div className="input-group">
				<label htmlFor="confirm-password">
					Confirm Password:
				</label>
				<input
					name="confirmPassword"
					onChange={handleChange}
					ref={confirmPasswordRef}
					type="password"
					value={formData.confirmPassword} />
			</div>
			<p
				className="password-feedback"
				ref={passwordFeedback}></p>
			<input
				type="submit"
				value="Submit" />
		</form>
  );
}

export default AccountForm;
