import React, { useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { WatchedFilmsDesktop } from "../WatchedCard";

import "./styles.scss";

export function WatchedsDesktop({ title }: { title: string }) {
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
    <section className="cotainer-WatchedsDesktop">
      <h3>{title}</h3>
      <div className="cotainer-WatchedsDesktop-relative">
        <div
          className="container-WatchedsDesktop-relative-arrowLeft"
          onClick={handleLeftScroll}
        >
          <BiLeftArrow />
        </div>
        <div className="cotainer-WatchedsDesktop-overflowX" ref={containerRef}>
          <WatchedFilmsDesktop
            progress={30}
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.empireposter.de%2Fbilder%2Fbilder_XL%2F799401.jpg&f=1&nofb=1"
            alt="Bleach"
            time="1h:25m"
          />
          <WatchedFilmsDesktop
            progress={50}
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-L7B7DH9eLjo%2FU6fSpnMQIdI%2FAAAAAAAABAI%2FFNEH7jfx1VE%2Fs1600%2FSword.Art.Online.poster.jpg&f=1&nofb=1"
            alt="SAO"
            time="T1:E5"
          />
          <WatchedFilmsDesktop
            progress={80}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fq634topa7yw11.jpg&f=1&nofb=1"
            alt="Bleach"
            time="T1:E3"
          />
          <WatchedFilmsDesktop
            progress={30}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.zerochan.net%2FViolet.Evergarden.(Character).full.2697911.png&f=1&nofb=1"
            alt="violet evergarden"
            time="T1:E7"
          />
          <WatchedFilmsDesktop
            progress={30}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdoblaje%2Fimages%2F2%2F2d%2FHsgirl.jpg%2Frevision%2Flatest%3Fcb%3D20181217021846%26path-prefix%3Des&f=1&nofb=1"
            alt="Hi score girl"
            time="T2:E21"
          />
          <WatchedFilmsDesktop
            progress={57}
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.otakutale.com%2Fwp-content%2Fuploads%2F2015%2F05%2FRakudai-Kishi-no-Cavalry-Light-Novel-Vol-0-Cover.jpg&f=1&nofb=1"
            alt="Rakudai Kishi"
            time="T1:E5"
          />
        </div>
        <div
          className="container-WatchedsDesktop-relative-arrowRight "
          onClick={handleRigthScroll}
        >
          <BiRightArrow />
        </div>
      </div>
    </section>
  );
}
