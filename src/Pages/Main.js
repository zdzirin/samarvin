// Components
import Navbar from "../Components/Navbar/Navbar.js";
import Footer from "../Components/Footer/Footer.js";

import MountainFogSillhouette from "../Photos/MountainFogSillhouette.jpg";

function Main(props) {
  return (
    <div
      className="page-container"
      style={{
        background:
          "linear-gradient(90deg, rgba(232,236,245,1) 0%, rgba(235,240,246,1) 50%, rgba(242,246,250,1) 74%, rgba(245,246,250,1) 100%)",
      }}
    >
      <Navbar />
      <img
        className="main-photo"
        alt="Silhouette of a mountain in the fog"
        src={MountainFogSillhouette}
      ></img>
      <div className="mobile-filler" />
      <Footer />
    </div>
  );
}

export default Main;
