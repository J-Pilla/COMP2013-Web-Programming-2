import PostCard from "./PostCard";

export default function PostContainer({ posts }) {
	/* I made a copy to sort it, that way it can be sorted alphabetically,
	 * and post's will still be added to the end way with the correct id */
	let sortedPosts = [...posts];
	sortedPosts.sort((a, b) => b.id - a.id);
	return (
		<div>
			{sortedPosts.map((post) => (
				<PostCard key={post.id} title={post.title} body={post.body} />
			))}
		</div>
	);
}
