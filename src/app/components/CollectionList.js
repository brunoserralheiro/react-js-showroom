import React from "react";
import Collection from "./Collection";

export default function CollectionList({ collectionList }) {
  return collectionList.map((collection) => {
    return (
      // using list to display a bullet for allcollections, active and inactive,
      // remove those tags later
      <ul>
        <li>
          <Collection
            key={collection.name}
            collection={collection}
          ></Collection>
        </li>
      </ul>
    );
  });
}
