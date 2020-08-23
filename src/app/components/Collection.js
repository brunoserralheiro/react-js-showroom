import React from "react";

export default function Collection({ collection }) {
  return (
    <div style={{ display: collection.active ? "block" : "none" }}>
      <div>
        {"========="}
        <p />
        <p />
        {collection.id}
        <p />
        {collection.name}
        <p />
        {collection.active}
      </div>
    </div>
  );
}
