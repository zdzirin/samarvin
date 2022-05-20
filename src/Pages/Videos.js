import Navbar from "../Components/Navbar/Navbar.js";
import VideoList from "../Components/VideoList/VideoList.js";
import Footer from "../Components/Footer/Footer.js";

function Videos(props) {
  let videos = [
    "https://www.youtube.com/embed/TkRNIt8c4nM",
    "https://www.youtube.com/embed/-n-jCWFX6Qk",
    "https://www.youtube.com/embed/AqBQ_gZ3O3s",
    "https://www.youtube.com/embed/2tAEUVWOqZE",
    "https://www.youtube.com/embed/mfgkzBRO07g",
  ];

  return (
    <div className="page-container">
      <Navbar />
      <VideoList videos={videos} />
      <Footer subpage />
    </div>
  );
}

export default Videos;
