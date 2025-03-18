import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBarBox flex items-center bg-red-200 size-14 bg-white dark:bg-gray-800 ring shadow-xl ring-gray-900/5 border-2 border-b-gray-500">
      <div className="navBarLeft flex items-center size-14 gap-2 px-3">
        <div className="logo bg-transparent flex items-center cursor-pointer">
          <img src="/Images/logo.png" className="logoImage size-10" />
        </div>

        <div className="searchBox bg-gray-700 rounded-full flex content-center h-10 gap-2 px-3">
          <div className="searchDiv grid content-center">
            <img src="/Images/search.png" className="searchIcon size-4" />
          </div>

          <div className="inputDiv grid content-center">
            <input
              type="text"
              placeholder="Search FaceBook"
              className="searchBar placeholder-gray-400 placeholder:font-light"
            />
          </div>
        </div>
      </div>

      <div className="navBarCenter flex items-center size-14 gap-2 px-2">
        <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
          <img src="/Images/home.png" className="centerIcon size-7" />
        </div>

        <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
          <img src="/Images/video.png" className="centerIcon size-7" />
        </div>

        <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
          <img src="/Images/marketplace.png" className="centerIcon size-7" />
        </div>

        <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
          <img src="/Images/groups.png" className="centerIcon size-7" />
        </div>

        <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
          <img src="/Images/gaming.png" className="centerIcon size-7" />
        </div>
      </div>

      <div className="navBarRight flex items-center justify-end size-14 gap-3 px-3">
        <div className="navBarRightIcon bg-blue-400 size-10 rounded-full grid place-content-center bg-gray-700 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/menu.png" className="rightIcon size-5" />
        </div>

        <div className="navBarRightIcon bg-blue-400 size-10 rounded-full grid place-content-center bg-gray-700 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/message.png" className="rightIcon size-5" />
        </div>

        <div className="navBarRightIcon bg-blue-400 size-10 rounded-full grid place-content-center bg-gray-700 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/notifications.png" className="rightIcon size-5" />
        </div>

        <div className="navBarRightIcon bg-blue-400 size-10 rounded-full grid place-content-center cursor-pointer">
          <img
            src="/Images/propic.jpeg"
            alt="profile"
            className="profilePic size-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
