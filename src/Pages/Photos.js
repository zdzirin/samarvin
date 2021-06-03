import Navbar from "../Components/Navbar/Navbar.js";
import PhotoList from "../Components/PhotoList/PhotoList.js";
import Footer from "../Components/Footer/Footer.js"

function Photos(props) {
  return (
    <div className="page-container">
      <Navbar />
      <PhotoList photos={props.photos} />
      <Footer subpage />
    </div>
  );
}

export default Photos;
