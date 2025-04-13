import LeftPane from "../../Components/LeftPane/LeftPane";
import MiddlePane from "../../Components/MiddlePane/MiddlePane";
import NavBar from "../../Components/Navigation/NavBar";
import RightPane from "../../Components/RightPane/RightPane";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="bottomContainer grid grid-cols-4">
        <LeftPane />
        <MiddlePane />
        <RightPane />
      </div>
    </div>
  );
}

export default Home;
