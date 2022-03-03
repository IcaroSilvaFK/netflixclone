import React, { useEffect, useRef, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { SectionFilms } from "../SectionFilms";

import "./styles.scss";
export function ImagesCardsDesktop({ title }: { title: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleRigthScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth;
    }
  };

  const handleLeftScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    }
  };

  return (
    <section className="container-desktop-images">
      <div className="container-desktop-images-title">
        <h3>{title}</h3>
      </div>
      <div className="container-desktop-images-move">
        <div
          className="container-desktop-images-scroll-left"
          onClick={handleLeftScroll}
        >
          <BiLeftArrow />
        </div>
        <div className="container-desktop-images-scroll" ref={containerRef}>
          <SectionFilms
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6a%2F45%2F6a%2F6a456aeb30db97af537dd28ba761a19d--bleach-comic-book.jpg&f=1&nofb=1"
            film="Belach"
          />
          <SectionFilms
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdoblaje%2Fimages%2F2%2F2d%2FHsgirl.jpg%2Frevision%2Flatest%3Fcb%3D20181217021846%26path-prefix%3Des&f=1&nofb=1"
            film="Hi score girl"
          />
          <SectionFilms
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.geek-it.org%2Fwp-content%2Fuploads%2F2015%2F10%2FAincrad-1-e1443896440818.jpeg&f=1&nofb=1"
            film="Sword art online"
          />
          <SectionFilms
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.fstatic.com%2Fx-5SsxrbKF3sd1o9MWpzyTBtymo%3D%2F290x478%2Fsmart%2Fmedia%2Fmovies%2Fcovers%2F2015%2F10%2Frakudai-kishi-no-cavalry_tNone.jpg&f=1&nofb=1"
            film="Rakudai Kishi"
          />
          <SectionFilms
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6e%2F8c%2F5a%2F6e8c5adace6b1ebc633fa29475e32022.jpg&f=1&nofb=1"
            film="Violet Evergarden"
          />
          <SectionFilms
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F04%2F18%2Fb7%2F0418b78d341a736b2d5aec43c6793fa7.jpg&f=1&nofb=1"
            film="Bunny Girl"
          />
          <SectionFilms
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-tUPKh5m0mxQ%2FULrIXgcDszI%2FAAAAAAAAALo%2FWvxiS7v-jdc%2Fs640%2F30-sakurasou-no-pet-na-kanojo-game-2.jpg&f=1&nofb=1"
            film="Sakurasou"
          />
          <SectionFilms
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.dualshockers.com%2Fwp-content%2Fuploads%2F2019%2F07%2FThe-Witcher-Netflix-Poster.jpg&f=1&nofb=1"
            film="The Withcer"
          />
          <SectionFilms
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.animeuknews.net%2Fapp%2Fuploads%2F2019%2F03%2FNeon-Genesis-Evangelion-3.jpg&f=1&nofb=1"
            film="Evangelion"
          />
        </div>
        <div
          className="container-desktop-images-scroll-right"
          onClick={handleRigthScroll}
        >
          <BiRightArrow />
        </div>
      </div>
    </section>
  );
}
