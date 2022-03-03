import React from "react";

import "./styles.scss";

interface SectionFilmsProp {
  title: string;
  children: JSX.Element;
}

export function SectionFilms({ children, title }: SectionFilmsProp) {
  return (
    <section className="section-cards">
      <strong>{title}</strong>
      {children}
    </section>
  );
}
