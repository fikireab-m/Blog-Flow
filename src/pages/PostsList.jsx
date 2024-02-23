import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";
import PostTile from "../components/PostTile";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => <PostTile post={post} key={post.id}/>);

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
export default PostsList;
