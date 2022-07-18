import React from "react";
import ContentLoader from "react-content-loader";

function CardPlaceholder() {
  return (
    <ContentLoader
      speed={2}
      className="pizza-block"
      width={280}
      height={467}
      viewBox="0 0 280 467"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="134" cy="131" r="117" />
      <rect x="36" y="270" rx="11" ry="11" width="202" height="27" />
      <rect x="128" y="123" rx="0" ry="0" width="0" height="1" />
      <rect x="0" y="315" rx="11" ry="11" width="277" height="79" />
      <rect x="-3" y="425" rx="11" ry="11" width="141" height="31" />
      <rect x="171" y="414" rx="24" ry="24" width="109" height="51" />
    </ContentLoader>
  );
}

export default CardPlaceholder;
