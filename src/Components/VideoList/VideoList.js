import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

import "./VideoList.css";

function VideoList(props) {
  const videos = props.videos;

  return (
    <div className="video-list-container" data-simplebar>
        {videos.map((item) => (<Video video={item} />))}
    </div>
  );
}

function Video(props) {
    return (
        <h1>this is a video {props.video}</h1>
    );
}

export default VideoList;
