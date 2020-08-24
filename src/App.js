import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import CollectionList from "./app/components/CollectionList";
const { v4: uuidv4 } = require("uuid");
const LOCAL_STORAGE_KEY = "collectionsList_key";
function App() {
  const [collectionsList, setCollections] = useState([]);
  const [newCollectionName, setNewCollectionName] = useState(
    JSON.parse(localStorage.getItem(Object.keys(LOCAL_STORAGE_KEY)))
  );
  const collectionNameRef = useRef(null);

  useEffect(() => {
    const storedCollectionsList = JSON.parse(
      localStorage.getItem(Object.keys(LOCAL_STORAGE_KEY))
    );
    if (storedCollectionsList) setCollections(storedCollectionsList);
    return () => {
      // cleanup
      console.log(
        "storedCollectionsList: \n %s",
        JSON.stringify(localStorage.getItem(Object.keys(LOCAL_STORAGE_KEY)))
      );
    };
  }, [collectionsList]);

  useEffect(() => {
    // effect
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(collectionsList));
    return () => {
      // cleanup
    };
  }, [collectionsList]);

  const addCollection = (event) => {
    if (newCollectionName === "") return;
    let newCollection = {
      id: uuidv4(),
      name: newCollectionName,
      active: true,
    };
    event.preventDefault();
    console.log("newCollectionName: " + newCollectionName);
    setCollections([...collectionsList, newCollection]);
    newCollection = null;
    setNewCollectionName("");
  };

  function toggleCollection(id) {
    const newCollectionsList = [...collectionsList];
    const collection = newCollectionsList.find((col) => col.id === id);
    collection.active = !collection.active;
    setCollections(newCollectionsList);
  }

  function showInactive() {
    const newCollectionsList = [...collectionsList];
    const inactiveCollections = newCollectionsList.filter((col) => !col.active);
    setCollections(inactiveCollections);
  }

  console.log(
    "All CollectionsList after update: " + JSON.stringify(collectionsList)
  );
  return (
    <>
      <div className="container">
        <CollectionList
          collectionList={collectionsList}
          toggleCollection={toggleCollection}
        />
        <input
          type="text"
          name="add_name"
          ref={collectionNameRef}
          value={newCollectionName}
          placeholder="Collection name"
          onChange={(e) => setNewCollectionName(e.target.value)}
        />
        <button onClick={addCollection}>Add </button>
        <button onClick={showInactive}>Show Inactive Collections</button>
        <div>
          Total: {collectionsList.filter((col) => !col.active).length} Innactive
          Collections found in the List
        </div>
      </div>
    </>
  );
}

export default App;
