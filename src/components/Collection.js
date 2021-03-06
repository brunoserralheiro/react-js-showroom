import React, { useState } from "react";

export default function Collection({ collection, toggleCollection }) {
                 const [checked, setChecked] = useState(true);
                 const toggleCheck = () => {
                   console.log(collection.active);
                   toggleCollection(collection.id)
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
                               defaultChecked={collection.active ? true : false}
                               onChange={toggleCheck}
                               readOnly={false}
                             />
                             <div
                               style={{
                                 display: collection.active ? "block" : "none",
                               }}
                             >
                               {collection.id}
                               <p />
                               <p />
                             </div>
                             {collection.name}
                           </label>
                         </div>
                         <p />
                       </div>
                     </div>
                   </>
                 );
               }
