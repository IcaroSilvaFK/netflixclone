import React from "react";

import { HeaderMobile } from "../../components/mobile/Header";
import { CardTitleMobile } from "../../components/mobile/CardTitle";
import { SectionFilms } from "../../components/mobile/SectionFilms";
import { SectionWatchde } from "../../components/mobile/SectionWatched";
import { Images } from "../../components/mobile/Images";
import { WatchedsCard } from "../../components/mobile/WatchedsCard";
import { HeaderDesktop } from "../../components/desktop/Header";
import { CardTitleDesktop } from "../../components/desktop/CardTitle";

import "./styles.scss";
import { ImagesCardsDesktop } from "../../components/desktop/Images";

export function Home() {
  return (
    <div className="containerHome">
      <HeaderMobile />
      <HeaderDesktop />
      <div className="container-Image-Home">
        <CardTitleMobile />
        <CardTitleDesktop />
      </div>
      <main>
        <section className="section-films">
          <SectionFilms title="Séries de anime">
            <div className="section-images">
              <Images />
            </div>
          </SectionFilms>
          <ImagesCardsDesktop title="Assistir novamente" />
        </section>
        <section className="watched-Container">
          <SectionWatchde title="Continuar assistindo como Icaro">
            <div className="watched-row-container">
              <WatchedsCard
                image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.empireposter.de%2Fbilder%2Fbilder_XL%2F799401.jpg&f=1&nofb=1"
                title="Bleach"
                time="1h:25m"
                progress={30}
              />
              <WatchedsCard
                image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-L7B7DH9eLjo%2FU6fSpnMQIdI%2FAAAAAAAABAI%2FFNEH7jfx1VE%2Fs1600%2FSword.Art.Online.poster.jpg&f=1&nofb=1"
                title="SAO"
                time="T1:E5"
                progress={50}
              />
              <WatchedsCard
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fq634topa7yw11.jpg&f=1&nofb=1"
                title="Bleach"
                time="T1:E3"
                progress={80}
              />
              <WatchedsCard
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.zerochan.net%2FViolet.Evergarden.(Character).full.2697911.png&f=1&nofb=1"
                title="violet evergarden"
                time="T1:E7"
                progress={40}
              />
              <WatchedsCard
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdoblaje%2Fimages%2F2%2F2d%2FHsgirl.jpg%2Frevision%2Flatest%3Fcb%3D20181217021846%26path-prefix%3Des&f=1&nofb=1"
                title="Hi score girl"
                time="T2:E21"
                progress={10}
              />
              <WatchedsCard
                image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.otakutale.com%2Fwp-content%2Fuploads%2F2015%2F05%2FRakudai-Kishi-no-Cavalry-Light-Novel-Vol-0-Cover.jpg&f=1&nofb=1"
                title="Rakudai Kishi"
                time="T1:E5"
                progress={57}
              />
            </div>
          </SectionWatchde>
        </section>
      </main>
    </div>
  );
}
