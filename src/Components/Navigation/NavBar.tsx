import "./NavBar.css";
import * as Tooltip from "@radix-ui/react-tooltip";
import 'boxicons'

function NavBar() {
  return (
    <div className="navBarBox flex w-full items-center bg-red-200 size-14 bg-white dark:bg-gray-800 ring shadow-xl ring-gray-900/5 border-2 border-b-gray-500">
      <div className="navBarLeft flex items-center size-14 gap-2 px-3">
        <div className="logo bg-transparent flex items-center cursor-pointer">
          <img src="/Images/logo.png" className="logoImage size-10" />
        </div>

        <div className="searchBox bg-gray-700 rounded-full relative flex items-center justify-center h-10 gap-3 px-3">
          
            {/* <img src="/Images/search.png" className="searchIcon size-4 absolute" /> */}
            <i className="bx bx-search absolute text-xl text-gray-400 left-3"></i>
            <input
              type="text"
              placeholder="Search FaceBook"
              className="searchBar placeholder-gray-400 placeholder:font-light  text-base pl-7 outline-hidden"
            />

        </div>
      </div>

      <div className="navBarCenter flex items-center size-14 gap-2 px-2">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
                <img src="/Images/home.png" className="centerIcon size-7" />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              className="px-3 py-1 text-sm text-black bg-gray-300 rounded shadow-lg"
            >
              Home
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
                <img src="/Images/video.png" className="centerIcon size-7" />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              className="px-3 py-1 text-sm text-black bg-gray-300 rounded shadow-lg"
            >
              Video
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
                <img
                  src="/Images/marketplace.png"
                  className="centerIcon size-7"
                />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              className="px-3 py-1 text-sm text-black bg-gray-300 rounded shadow-lg"
            >
              Marketplace
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
                <img src="/Images/groups.png" className="centerIcon size-7" />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              className="px-3 py-1 text-sm text-black bg-gray-300 rounded shadow-lg"
            >
              Groups
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="navBarCenterIcon hover:bg-gray-600 active:bg-gray-500 hover:rounded-xl hover:h-12 grid place-content-center cursor-pointer active:border-b-4 border-indigo-500 w-1/5">
                <img src="/Images/gaming.png" className="centerIcon size-7" />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              className="px-3 py-1 text-sm text-black bg-gray-300 rounded shadow-lg"
            >
              Gaming
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <div className="navBarRight flex items-center justify-end size-14 gap-3 px-3">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="navBarRightIcon bg-blue-400 size-10 rounded-full grid place-content-center bg-gray-700 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
                <img src="/Images/menu.png" className="rightIcon size-5" />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              className="px-3 py-1 text-sm text-black bg-gray-300 rounded shadow-lg"
            >
              Menu
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="navBarRightIcon bg-blue-400 size-10 rounded-full grid place-content-center bg-gray-700 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
                <img src="/Images/message.png" className="rightIcon size-5" />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              className="px-3 py-1 text-sm text-black bg-gray-300 rounded shadow-lg"
            >
              Messenger
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="navBarRightIcon bg-blue-400 size-10 rounded-full grid place-content-center bg-gray-700 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
                <img
                  src="/Images/notifications.png"
                  className="rightIcon size-5"
                />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              className="px-3 py-1 text-sm text-black bg-gray-300 rounded shadow-lg"
            >
              Notifications
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="navBarRightIcon bg-blue-400 size-10 rounded-full grid place-content-center cursor-pointer">
                <img
                  src="/Images/propic.jpeg"
                  alt="profile"
                  className="profilePic size-10 rounded-full"
                />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              className="px-3 py-1 text-sm text-black bg-gray-300 rounded shadow-lg"
            >
              Account
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  );
}

export default NavBar;
