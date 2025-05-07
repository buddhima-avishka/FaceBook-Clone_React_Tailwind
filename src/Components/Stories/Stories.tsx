import "./Stories.css"

function Stories() {
  return (
    <div className="storiesBox bg-red-100 w-full h-45 inline-grid grid-cols-6 flex justify-items-center items-center">
      <div className="story bg-red-300 h-40 w-25 rounded-lg grid relative">
        <img src="/Images/propic.jpeg" className="rounded-t-lg" />
        <div className="addIcon absolute bg-sky-200 rounded-full size-8 top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <i className='bx bx-plus absolute top-2 left-2'></i>
        </div>
        <span className="iconName text-white absolute bottom-1 left-5">Create a Story</span>
      </div>
      <div className="story bg-red-400 h-40 w-25 rounded-lg relative">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
      <div className="story bg-red-300 h-40 w-25 rounded-lg relative">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
      <div className="story bg-red-400 h-40 w-25 rounded-lg relative">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
      <div className="story bg-red-300 h-40 w-25 rounded-lg relative">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
      <div className="story bg-red-400 h-40 w-25 rounded-lg relative">
        <img src="/Images/propic.jpeg" className="size-8 rounded-full absolute top-2 left-2 border-3 border-sky-600" />
        <span className="iconName absolute bottom-1 left-2 text-white">Name</span>
      </div>
    </div>
  )
}

export default Stories