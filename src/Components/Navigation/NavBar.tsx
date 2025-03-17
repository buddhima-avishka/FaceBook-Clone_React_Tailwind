import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./NavBar.css"


function NavBar() {
  return (
    <div className="navBarBox bg-yellow-400 relative flex h-16 items-center justify-between">

      <div className="navBarLeft relative flex h-16 items-center justify-between">

        <div className="logo">
          <FacebookOutlinedIcon className='facebookLogo size-8 rounded-full'/>
        </div>

        <div className="searchBox bg-yellow-800">
          <SearchOutlinedIcon className='searchIcon'/>
          <input type="text" placeholder='Search FaceBook' className="searchBar" />
        </div>

      </div>

      <div className="navBarCenter relative flex h-16 items-center justify-between">

        <div className="navBarCenterIcon">
          <HomeIcon className='centerIcon'/>
        </div>

        <div className="navBarCenterIcon">
          <OndemandVideoOutlinedIcon className='centerIcon'/>
        </div>

        <div className="navBarCenterIcon">
          <StorefrontOutlinedIcon className='centerIcon'/>
        </div>

        <div className="navBarCenterIcon">
          <GroupsOutlinedIcon className='centerIcon'/>
        </div>

        <div className="centerIcon">
          <SportsEsportsOutlinedIcon/>
        </div>
        
      </div>

      <div className="navBarRight relative flex h-16 items-center justify-between">

        <div className="navBarRightIcon">
          <AppsIcon className='rightIcon'/>
        </div>

        <div className="navBarRightIcon">
          <ChatIcon className='rightIcon'/>
          <span className="iconTag">3</span>
        </div>

        <div className="navBarRightIcon">
          <NotificationsIcon className='rightIcon'/>
          <span className="iconTag">10</span>
        </div>

        <div className="navBarRightIcon">
          <img src="/Images/1.webp" alt="profile" className="profilePic size-8 rounded-full" />
          <span className="iconTag">^</span>
        </div>

      </div>

    </div>
  )
}

export default NavBar
