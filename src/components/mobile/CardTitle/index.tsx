import React from "react";
import { SiNetflix } from "react-icons/si";
import { RiAddLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

import "./styles.scss";

export function CardTitleMobile() {
  return (
    <section className="sectionCard">
      <div className="section-type">
        <SiNetflix />
        <span>SÉRIE</span>
      </div>
      <div className="section-title">
        <h3>The Witcher</h3>
        <ul>
          <li>Ação</li>
          <div className="circle-separator"></div>
          <li>Drama</li>
          <div className="circle-separator"></div>
          <li>Fantasia</li>
        </ul>
      </div>
      <div className="card-List">
        <div className="column">
          <RiAddLine />
          <span>Minha lista</span>
        </div>
        <button>
          <FaPlay /> Assistir
        </button>
        <div className="column">
          <AiOutlineInfoCircle />
          <span>Saiba mais</span>
        </div>
      </div>
    </section>
  );
}
