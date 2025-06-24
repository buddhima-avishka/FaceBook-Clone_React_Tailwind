import "./AddPost.css";

function AddPost() {
  return (
    <div className="addPost pt-4 pb-4 pl-3 pr-3">
      <div className="addPostContainer p-3 dark:bg-gray-500 rounded-lg ">
        <div className="postTop flex items-center pb-3 gap-2">
          <div className="profile bg-transparent cursor-pointer size-12 rounded-full grid place-content-center">
          <img src="/Images/propic.jpeg" className="size-11 rounded-full" />
          </div>
          <div className="postContent rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer relative flex items-center h-9 p-3 w-full">
            <input
              type="text"
              placeholder="What's on your mind, Person?"
              className="contentText xl:flex placeholder-gray-400 placeholder:font-light text-base outline-hidden w-full"
            />
          </div>
        </div>
        <hr />
        <div className="postBottom flex pt-2">
        <li className="postIcon flex h-10 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer w-1/3">
          <img src="/Images/live video.png" className="size-8" />
          <span className="postIconName pl-4 text-white">Live Video.png</span>
        </li>
        <li className="postIcon flex h-10 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer w-1/3">
          <img src="/Images/photovideo.png" className="size-8" />
          <span className="postIconName pl-4 text-white">Photo/Video</span>
        </li>
        <li className="postIcon flex h-10 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer w-1/3">
          <img src="/Images/feeling.png" className="size-8" />
          <span className="postIconName pl-4 text-white">Feeling/activity</span>
        </li>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
