import Navbar from "../Components/Navbar/Navbar.js";
import VideoList from "../Components/VideoList/VideoList.js";
import Footer from "../Components/Footer/Footer.js";

function Videos(props) {

  let videos  = []

  return (
    <div className="page-container">
      <Navbar />
      <VideoList videos={videos} />
      <Footer subpage />
    </div>
  );
}

export default Videos;
