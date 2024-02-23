import PropTypes from "prop-types";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

const PostTile = ({ post }) => {
  return (
    <article key={post.id}>
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
        </p>
        <ReactionButtons post={post} />
      </article>
    </article>
  );
};

PostTile.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostTile;
