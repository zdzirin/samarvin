import Navbar from "../Components/Navbar/Navbar.js";
import Footer from "../Components/Footer/Footer.js";
import { useParams } from "react-router-dom";

function Photo(props) {
  
    let { i } = useParams()
  
    return (
    <div className="page-container">
      <Navbar />
      <div className='photo-container' style={{height: '60vh', width: '80vw', display: "flex", flexDirection: 'column', alignItems: 'center'}}>
        <img src={props.photos[i]} alt="selected" style={{maxWidth: '100%', maxHeight: '100%'}} />
      </div>
      <Footer subpage />
    </div>
  );
}

export default Photo;
