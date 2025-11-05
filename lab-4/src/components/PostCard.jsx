export default function PostCard({
	title = "Hello World",
	body = "This is a default post",
}) {
	return (
		<div className="Card">
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	);
}
