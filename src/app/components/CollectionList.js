import React from "react";
import Collection from "./Collection";

export default function CollectionList({ collectionList, toggleCollection }) {
  return collectionList.map((collection) => {
    return (
      // using list to display a bullet for allcollections, active and inactive,
      // remove those tags later

      <>
        <div className="container-fluid">
          <div className="row">
            {collection.active ? (
              <Collection
                key={collection.name}
                collection={collection}
                toggleCollection={toggleCollection}
              ></Collection>
            ) : null}
          </div>
        </div>
      </>
    );
  });
}
