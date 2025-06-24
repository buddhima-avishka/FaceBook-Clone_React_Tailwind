import "./Stories.css"

function Stories() {
  return (
    <div className="storiesBox dark:bg-gray-800 w-full h-45 inline-grid grid-cols-6 flex justify-items-center items-center">
      <div className="story dark:bg-gray-500 h-40 w-25 rounded-lg grid relative cursor-pointer">
        <img src="/Images/propic.jpeg" className="rounded-t-lg" />
        <div className="addIcon absolute dark:bg-blue-600 rounded-full size-8 top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <i className='bx bx-plus absolute top-2 left-2'></i>
        </div>
        <span className="iconName text-white absolute bottom-1 left-5">Create a Story</span>
      </div>
      <div className="story dark:bg-gray-500 h-40 w-25 rounded-lg relative cursor-pointer">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
      <div className="story dark:bg-gray-500 h-40 w-25 rounded-lg relative cursor-pointer">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
      <div className="story dark:bg-gray-500 h-40 w-25 rounded-lg relative cursor-pointer">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
      <div className="story dark:bg-gray-500 h-40 w-25 rounded-lg relative cursor-pointer">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
      <div className="story dark:bg-gray-500 h-40 w-25 rounded-lg relative cursor-pointer">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
      {/* <div className="seeMoreButton w-full  flex absolute items-center justify-end px-3">
      <button className="rounded-full bg-white text-sm font-semibold text-gray-900">
          <img src="/Images/next arrow.png" className="size-8" />
        </button>
      </div> */}
    </div>
  )
}

export default Stories