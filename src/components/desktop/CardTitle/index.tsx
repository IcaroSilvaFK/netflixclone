import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

import "./styles.scss";

export function CardTitleDesktop() {
  return (
    <section className="container-desktop-cardTitle">
      <div className="container-desktop-cardTitle-image">
        <div className="container-desktop-cardTitle-text">
          <div className="container-desktop-cardTitle-text-title">
            <h3>NETFLIX</h3> <span>ORIGINAL</span>
            <h1>THE WITCHER</h1>
          </div>
          <div className="container-desktop-cardTitle-text-description">
            <strong>O começo do fim</strong>
            <p>
              Ao chegar à cidade de Blaviken, Geralt encontra pessoas hostis e
              um mago esperto. O mundo de Ciri vira de pernas para o ar enquanto
              Nilfigard se prepara para atacar
            </p>
          </div>
          <div className="container-desktop-cardTitle-text-buttons">
            <button>
              <FaPlay />
              Play
            </button>
            <button>
              <MdAdd />
              My List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
