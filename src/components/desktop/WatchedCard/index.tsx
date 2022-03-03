import React from "react";

import { BsInfoCircle } from "react-icons/bs";
import { MdMoreVert } from "react-icons/md";
import { ImPlay3 } from "react-icons/im";

import "./styles.scss";

interface WatchedFilmsDesktopProps {
  progress: number;
  image: string;
  alt: string;
  time: string;
}

export function WatchedFilmsDesktop({
  progress,
  image,
  alt,
  time,
}: WatchedFilmsDesktopProps) {
  return (
    <section className="container-desktop-watchedFilms">
      <div className="container-desktop-watchedFilms-">
        <div className="container-desktop-watchedFilms-image">
          <img src={image} alt={alt} />
        </div>
        <div className="container-desktop-watchedFilms-palyer">
          <ImPlay3 />
        </div>
        <div className="container-desktop-watchedFilms-time">{time}</div>
      </div>
      <div className="watched-films-desktop-progressiveBar">
        <div
          style={{
            width: `${progress}%`,
            height: `100%`,
            backgroundColor: "#e53e3e",
          }}
        ></div>
      </div>
      <div className="watched-films-desktop-container-svg">
        <BsInfoCircle />
        <MdMoreVert />
      </div>
    </section>
  );
}
