import React from "react";

import "./styles.scss";

export function SectionWatchde({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) {
  return (
    <section className="containerWatched">
      <strong>{title}</strong>
      {children}
    </section>
  );
}
