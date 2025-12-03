import { useState } from "react";
import axios from "axios";
import FormComponent from "./FormComponenet";
import Cookies from "js-cookie";

export default function RegisterPage() {
	const [formData, setFormData] = useState({ username: "", password: "" });
	const [postResponse, setPostResponse] = useState("");

	// handlers
	const handleOnChange = (e) => {
		setFormData((prevData) => {
			return { ...prevData, [e.target.name]: e.target.value };
		});
	};

	const handleRegister = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3000/register",
				{
					...formData,
				}
			);
			setPostResponse(response.data.message);
		} catch (error) {
			setPostResponse(
				error.response.data.message || "Cannot add username"
			);
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		handleRegister();
		setFormData({ username: "", password: "" });
	};

	return (
		<div>
			<FormComponent
				formData={formData}
				handleOnSubmit={handleOnSubmit}
				handleOnChange={handleOnChange}
				currentPage="Register"
				nextPage=""
				postResponse={postResponse}
			/>
		</div>
	);
}
