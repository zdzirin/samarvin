import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

import "./VideoList.css";

function VideoList(props) {
  const videos = props.videos;

  return (
    <div className="video-list-container" data-simplebar>
      {videos.map((item) => (
        <Video video={item} />
      ))}
    </div>
  );
}

function Video(props) {
  return (
    <iframe
      width="80%"
      style={{ aspectRatio: "2/1", margin: "50px 0px" }}
      src={props.video}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}

export default VideoList;
