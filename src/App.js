import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import CollectionList from "./app/components/CollectionList";
const { v4: uuidv4 } = require("uuid");
const LOCAL_STORAGE_KEY = "collections_key"
function App() {
  const [collections, setCollection] = useState([]);
  const [newCollectionName, setNewCollectionName] = useState(localStorage.getItem(Object.keys(LOCAL_STORAGE_KEY)));
  const collectionNameRef = useRef(null);

  useEffect(() => {
    const storedCollections = JSON.parse (localStorage.getItem(Object.keys(LOCAL_STORAGE_KEY)));
     if (storedCollections) setCollection(storedCollections);
    return () => {
      // cleanup
    }
  }, [])

   useEffect(() => {
    // effect
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(collections));
    return () => {
      // cleanup
    }
  }, [collections]);

  const addCollection = (event) => {
    if (newCollectionName === "") return;
    let newCollection = {
      id: uuidv4(),
      name: newCollectionName,
      active: true,
    };
    event.preventDefault();
    console.log("newCollectionName: " + newCollectionName);
    setCollection([...collections, newCollection]);
    newCollection = null;
    setNewCollectionName("");
  };


  console.log("All Collections after update: " + JSON.stringify(collections));
  return (
    <>
      <div className="container">
        <CollectionList collectionList={collections} />
        <input
          type="text"
          name="add_name"
          ref={collectionNameRef}
          value={newCollectionName}
          placeholder="Collection name"
          onChange={(e) => setNewCollectionName(e.target.value)}
        />
        <button onClick={addCollection}>Add </button>
        <button>Clear</button>
        <div>{collections.length} Collections</div>
      </div>
    </>
  );
}

export default App;
