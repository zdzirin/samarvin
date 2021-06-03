import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

import "./PhotoList.css";

function PhotoList(props) {
  const photos = props.photos;

  return (
    <div className="photo-list-container" data-simplebar>
      <p className="main-text" style={{ cursor: "default" }}>
        Place One
      </p>
      <div className="photo-list-row">
        <Thumbnail photo={photos[0]} />
        <Thumbnail photo={photos[1]} />
        <Thumbnail photo={photos[2]} />
      </div>
      <p className="main-text" style={{ cursor: "default" }}>
        Place Two
      </p>
      <div className="photo-list-row">
        <Thumbnail photo={photos[3]} />
        <Thumbnail photo={photos[4]} />
        <Thumbnail photo={photos[5]} />
      </div>
      <p className="main-text" style={{ cursor: "default" }}>
        Place Three
      </p>
      <div className="photo-list-row">
        <Thumbnail photo={photos[6]} />
        <Thumbnail photo={photos[7]} />
        <Thumbnail photo={photos[8]} />
      </div>
    </div>
  );
}

function Thumbnail(props) {
  return <img className="thumbnail-photo" src={props.photo}></img>;
}

export default PhotoList;
