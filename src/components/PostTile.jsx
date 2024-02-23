import PropTypes from 'prop-types';

const PostTile = ({post}) => {
  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  );
};

PostTile.propTypes = {
    post:PropTypes.object.isRequired
  }

export default PostTile;
