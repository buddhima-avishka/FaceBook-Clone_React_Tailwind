import "./LeftPane.css";

function LeftPane() {
  return (
    <div className="hidden lg:block dark:bg-gray-800 col-span-1 h-screen overflow-y-scroll custom-scrollbar p-2 pt-3">
      <div className="icons pb-2">
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/propic.jpeg" className="size-8 rounded-full" />
          <span className="iconName pl-4 text-white">My Profile</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/friends.png" className="size-8" />
          <span className="iconName pl-4 text-white">Friends</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/saved.png" className="size-8" />
          <span className="iconName pl-4 text-white">Saved</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/memories.png" className="size-8" />
          <span className="iconName pl-4 text-white">Memories</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/group.png" className="size-8" />
          <span className="iconName pl-4 text-white">Groups</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/videos.png" className="size-8" />
          <span className="iconName pl-4 text-white">Video</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/market.png" className="size-8" />
          <span className="iconName pl-4 text-white">Marketplace</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/feeds.png" className="size-8" />
          <span className="iconName pl-4 text-white">Feeds</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/ads manager.png" className="size-8" />
          <span className="iconName pl-4 text-white">Ads Manager</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/birthdays.png" className="size-8" />
          <span className="iconName pl-4 text-white">Birthdays</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/climate.png" className="size-8" />
          <span className="iconName pl-4 text-white">Climate Science Center</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/fundraisers.png" className="size-8" />
          <span className="iconName pl-4 text-white">Fundraisers</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/gaming video.png" className="size-8" />
          <span className="iconName pl-4 text-white">Gaming Video</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/messenger.png" className="size-8" />
          <span className="iconName pl-4 text-white">Messenger</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/messenger kids.png" className="size-8" />
          <span className="iconName pl-4 text-white">Messenger Kids</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/orders.png" className="size-8" />
          <span className="iconName pl-4 text-white">Orders & payments</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/pages.png" className="size-8" />
          <span className="iconName pl-4 text-white">Pages</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/game.png" className="size-8" />
          <span className="iconName pl-4 text-white">Play games</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/recent.png" className="size-8" />
          <span className="iconName pl-4 text-white">Recent ad activity</span>
        </li>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 active:bg-gray-500 cursor-pointer">
          <img src="/Images/reel.png" className="size-8" />
          <span className="iconName pl-4 text-white">Reels</span>
        </li>
      </div>

      <hr className="horizontal border-gray-500" />

      <div className="relative pt-3 pb-10 items-center">
        <h3 className="static pb-2 text-gray-300">Your Shortcuts</h3>
        <button
          type="button"
          className="absolute top-1 right-0 text-blue-500 hover:bg-gray-600 active:bg-gray-500 rounded-md text-sm px-2 py-2.5"
        >
          Edit
        </button>
        <li className="leftIcon flex h-15 items-center pl-6 pt-2 pb-2 hover:bg-gray-600 rounded-lg active:bg-gray-500 cursor-pointer">
          <img src="/Images/propic.jpeg" className="size-8 rounded-full" />
          <span className="iconName pl-4 text-white">My Page</span>
        </li>
      </div>

      <text className="text-gray-300 text-sm hover:underline">Privacy</text> <text className="text-gray-300"> · </text>
      <text className="text-gray-300 text-sm hover:underline">Terms</text> <text className="text-gray-300"> · </text>
      <text className="text-gray-300 text-sm hover:underline">Advertising</text> <text className="text-gray-300"> · </text>
      <text className="text-gray-300 text-sm hover:underline">Ad Choices</text> <text className="text-gray-300"> · </text>
      <text className="text-gray-300 text-sm hover:underline">Cookies</text> <text className="text-gray-300"> · </text>
      <text className="text-gray-300 text-sm hover:underline">More</text> <text className="text-gray-300"> · </text>
      <text className="text-gray-300 text-sm hover:underline">Meta © 2025</text>
    </div>
  );
}

export default LeftPane;
