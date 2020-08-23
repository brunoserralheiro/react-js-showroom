import React, { useState } from "react";
import "./App.css";
import CollectionList from "./app/components/CollectionList";

function App() {
  const collection1 = { id: 1, name: "col1", active: true };
  const collection2 = { id: 2, name: "col2", active: true };
  const collection3 = { id: 3, name: "col3", active: false };
  const collection4 = { id: 4, name: "col4", active: false };
  const defaultCollections = [
    collection1,
    collection2,
    collection3,
    collection4,
  ];
  const [collections, setCollection] = useState([]);
  const [newCollectionName, setNewCollectionName] = useState("");

  const addCollection = (event) => {
    let newCollection = {
      id: collections.length + 1,
      name: newCollectionName,
      active: true,
    };
    console.log(
      "Add Collection callback,  new ID = %s",
      collections.length + 1
    );
    event.preventDefault();

    console.log("newCollectionName: " + newCollectionName);

    console.log(
      "newCollection before update: " + JSON.stringify(newCollection)
    );
    setCollection([...collections, newCollection]);
    newCollection = null;

    console.log(" Collections : " + JSON.stringify(collections));

    setNewCollectionName("");
  };
  console.log(" Collections after : " + JSON.stringify(collections));
  return (
    <>
      <CollectionList collectionList={collections} />
      <form onSubmit={addCollection}>
        <input
          type="text"
          name="add_name"
          value={newCollectionName}
          placeholder="Collection name"
          onChange={(e) => setNewCollectionName(e.target.value)}
        />
        <button type="submit">Add </button>
        <button>Clear</button>
        <div>{collections.length} Collections</div>
      </form>
    </>
  );
}

export default App;
