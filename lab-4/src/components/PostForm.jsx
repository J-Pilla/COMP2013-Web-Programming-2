export default function PostForm({ form, updateForm, addPost }) {
	return (
		<div className="Form">
			<form onSubmit={addPost}>
				<p>
					<b>Post</b>
				</p>
				<label htmlFor="title">Title: </label>
				<br />
				<input
					id="title"
					type="text"
					name="title"
					value={form.title}
					onChange={updateForm}
				/>
				<hr />
				<label htmlFor="body">Body: </label>
				<br />
				{/*https://www.w3schools.com/tags/tag_textarea.asp*/}
				<textarea
					id="body"
					rows="2"
					name="body"
					value={form.body}
					onChange={updateForm}
				/>
				<hr />
				<button type="submit">Post</button>
			</form>
		</div>
	);
}
