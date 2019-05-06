import React from "react";

export default ({ info }) => {
  return (
    <div>
      {info.map(({ latitude, longitude, name, type, url }) => (
        <section>
          <image src={url} />
          <div>{name}</div>
          <div>{`${latitude}-${longitude}`}</div>
          <div>{type}</div>
        </section>
      ))}
    </div>
  );
};
