const Posts = (props) => {
  return (
    <div id='Posts'>
      <ul>
        {props.postinfo.map((postinfo, index) => {
          return (
            <ul key={index}>
              <b>USER INFO:</b>
              <div>User ID: {postinfo.userId}</div>
              <div>ID: {postinfo.id}</div>
              <div>Title: {postinfo.title}</div>
              <div>Body: {postinfo.body}</div>
              <div>
                {postinfo.comments.map((comment, index) => (
                  <p key={index}>
                    <b>COMMENTS:</b>
                    <div>Post ID: {comment.postId}</div>
                    <div>ID: {comment.id}</div>
                    <div>Name: {comment.name}</div>
                    <div>Email: {comment.email}</div>
                    <div>Body: {comment.body}</div>
                  </p>
                ))}
              </div>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
