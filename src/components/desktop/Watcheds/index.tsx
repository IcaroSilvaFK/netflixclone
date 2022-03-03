import React from "react";

export function WatchedsDesktopImage({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
}
