import AddPost from "../AddPost/AddPost";
import Stories from "../Stories/Stories";
import "./MiddlePane.css";

function MiddlePane() {
  return (
    <div className="col-span-4 h-screen md:col-span-3 lg:col-span-2 bg-sky-400">
      <Stories/>
      <AddPost/>
    </div>
  );
}

export default MiddlePane;
