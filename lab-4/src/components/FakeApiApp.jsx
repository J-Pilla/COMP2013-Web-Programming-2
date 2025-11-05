import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostContainer from "./PostContainer";

export default function FakeApiApp() {
	const emptyForm = {
		title: "",
		body: "",
	};

	// states
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [form, setForm] = useState(emptyForm);

	// state functions
	const addPost = (sender) => {
		sender.preventDefault();
		if (form.title != emptyForm.title && form.body != emptyForm.body) {
			setPosts([
				{
					userId: 11,
					id: posts.length + 1,
					...form,
				},
				...posts,
			]);
			setForm(emptyForm);
		} else alert("Please enter a title and/ or body");
	};

	const updateForm = (sender) => {
		setForm({
			...form,
			[sender.target.name]: sender.target.value,
		});
	};

	// effect
	useEffect(() => {
		fetchData();
	}, []);

	// effect function
	const fetchData = async () => {
		const URL = "https://jsonplaceholder.typicode.com/posts";
		const response = await fetch(URL);
		const data = await response.json();
		setPosts(data);
		setIsLoading(false);
	};

	// render
	return (
		<div>
			<h1>Fake API App</h1>
			<PostForm form={form} updateForm={updateForm} addPost={addPost} />
			{isLoading && <p>loading...</p>}
			<PostContainer posts={posts} />
		</div>
	);
}
