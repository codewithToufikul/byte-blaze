import Navber from "../Component/Navber";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
     <div className="">
     <Navber></Navber>
     </div>
     <div className="max-w-[1170px] mx-auto">
     <Blogs></Blogs>
     </div>
    </div>
  );
};

export default Home;
