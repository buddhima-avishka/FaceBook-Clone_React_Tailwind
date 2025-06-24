import "./Post.css";

function Post() {
  return (
    <div className="post pt-4 pb-4 pl-3 pr-3">
      <div className="postContainer dark:bg-gray-500 w-full h-100">
        <div className="postTop bg-blue-300 w-full h-1/6"></div>
        <div className="postCenter bg-blue-400 w-full h-4/6"></div>
        <div className="postBottom bg-blue-500 w-full h-1/6"></div>
      </div>
    </div>
  );
}

export default Post;
