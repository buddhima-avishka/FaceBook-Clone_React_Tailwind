import AddPost from "../AddPost/AddPost";
import Post from "../Post/Post";
import Stories from "../Stories/Stories";
import "./MiddlePane.css";

function MiddlePane() {
  return (
    <div className="col-span-4 h-screen md:col-span-3 lg:col-span-2 dark:bg-gray-800">
      <AddPost/>
      <Stories/>
      <Post/>
    </div>
  );
}

export default MiddlePane;
