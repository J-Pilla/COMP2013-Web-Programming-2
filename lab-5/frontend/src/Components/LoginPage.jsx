import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormComponent from "./FormComponenet";
import Cookies from "js-cookie";

export default function LoginPage() {
	const [formData, setFormData] = useState({ username: "", password: "" });
	const [postResponse, setPostResponse] = useState("");

	const navigate = useNavigate();

	// handlers
	const handleOnChange = (e) => {
		setFormData((prevData) => {
			return { ...prevData, [e.target.name]: e.target.value };
		});
	};

	const handleLogin = async () => {
		try {
			const response = await axios.post("http://localhost:3000/login", {
				...formData,
			});
			setPostResponse(response.data.message);
			if (response.status === 201) {
				navigate("/contacts", { state: formData });
				Cookies.set("jwt-authorization", response.data.token);
			}
		} catch (error) {
			console.log(error);
			setPostResponse(error.response.data.message || "Login failed");
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		handleLogin();
		setFormData({ username: "", password: "" });
	};

	return (
		<div>
			<FormComponent
				formData={formData}
				handleOnSubmit={handleOnSubmit}
				handleOnChange={handleOnChange}
				currentPage=""
				nextPage="register"
				postResponse={postResponse}
			/>
		</div>
	);
}
