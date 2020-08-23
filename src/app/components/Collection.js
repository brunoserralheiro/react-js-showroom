import React, { useState } from "react";

export default function Collection({ collection }) {
  const [checked, setChecked] = useState(true);
  const toggleCheck = () => {
    console.log(collection.active);
    collection.active
      ? (collection.active = false)
      : (collection.active = true);
    console.log(collection.active);
  };

  return (
    <>
      <div>
        <div>
          <div className="checkbox">
            <label>
              <input
                key={collection.id}
                type="checkbox"
                defaultChecked={collection.active?true:false}
                onChange={toggleCheck}
                readOnly={false}
              />
            </label>
          </div>
          <p />
          <div style={{ display: collection.active ? "block" : "none" }}>
            {collection.id}
            <p />
            {collection.name}
            <p />
          </div>
        </div>
      </div>
    </>
  );
}
