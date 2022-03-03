import React from "react";

import { HeaderMobile } from "../../components/mobile/Header";
import { CardTitleMobile } from "../../components/mobile/CardTitle";
import { SectionFilms } from "../../components/mobile/SectionFilms";
import { SectionWatchde } from "../../components/mobile/SectionWatched";
import { Images } from "../../components/mobile/Images";
import { HeaderDesktop } from "../../components/desktop/Header";
import { CardTitleDesktop } from "../../components/desktop/CardTitle";

import "./styles.scss";
import { ImagesCardsDesktop } from "../../components/desktop/Images";
import { ContainerWatchedMobile } from "../../components/mobile/ContainerWatched";
import { WatchedsDesktop } from "../../components/desktop/WatchedsDesktop";

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
          <WatchedsDesktop title="Continuar com Icaro" />
          <SectionWatchde title="Continuar assistindo como Icaro">
            <div className="watched-row-container">
              <ContainerWatchedMobile />
            </div>
          </SectionWatchde>
        </section>
      </main>
    </div>
  );
}
