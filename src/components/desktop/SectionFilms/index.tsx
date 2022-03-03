import React from "react";

import "./styles.scss";

export function SectionFilms({ image, film }: { image: string; film: string }) {
  return (
    <div className="container-desktop-sectionFilms">
      <div>
        <img src={image} alt={film} />
      </div>
    </div>
  );
}
