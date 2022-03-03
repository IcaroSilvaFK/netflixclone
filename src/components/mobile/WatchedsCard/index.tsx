import { BsInfoCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";

import "./styles.scss";

export function WatchedsCard({
  image,
  title,
  time,
  progress,
}: {
  image: string;
  title: string;
  time: string;
  progress: number;
}) {
  return (
    <div className="row-watched">
      <div className="row-container-relative">
        <img src={image} title={title} />
        <div className="row-absolute">
          <div className="row-container-svg-play">
            <FaPlay />
          </div>
          <div className="row-text-time">
            <p>{time}</p>
          </div>
        </div>
      </div>
      <div className="row-progressive-bar">
        <div
          style={{
            width: `${progress}%`,
            height: `5px`,
            backgroundColor: "#e53e3e",
          }}
        ></div>
      </div>
      <div className="row-icons-svg">
        <BsInfoCircle />
        <MdMoreVert />
      </div>
    </div>
  );
}
