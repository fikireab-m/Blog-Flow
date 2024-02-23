import { useSelector } from "react-redux";
import { selectAllPosts } from "./features/posts/postsSlice";
import PostTile from "./components/PostTile";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <PostTile key={post.id} post={post} />
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
export default PostsList;
