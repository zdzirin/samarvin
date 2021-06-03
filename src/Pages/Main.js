// Components
import Navbar from "../Components/Navbar/Navbar.js";
import Footer from "../Components/Footer/Footer.js";

function Main(props) {
  return (
    <div
      className="page-container"
      style={{
        background:
          "linear-gradient(90deg, rgba(232,236,245,1) 0%, rgba(245,246,250,1) 100%)",
      }}
    >
      <Navbar />
      <img className="main-photo" src={props.photos[6]}></img>
      <Footer />
    </div>
  );
}

export default Main;
