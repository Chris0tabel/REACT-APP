import data from "./data";
import { useState } from "react";
import  "./styles.css"

export default function Accordain() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentid) {
    setSelected(getCurrentid === selected ? null :getCurrentid);
  }

  return (
    <div className="wrapper">
     <button>Enable Multi Section</button>
      <div className="accordain">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                selected === dataItem.id ? (
                    <div className="content">{dataItem.answer}</div>
                )
                
                : null

              }
            </div>
          ))
        ) : (
          <div>No data Found!</div>
        )}
      </div>
    </div>
  );
}
