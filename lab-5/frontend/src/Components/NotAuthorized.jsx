import { Link } from "react-router-dom";

export default function NotAuthorized() {
	return (
		<div>
			<h1>Error 403: Not Authorized</h1>
			<Link to="/">Please login</Link>
		</div>
	);
}
