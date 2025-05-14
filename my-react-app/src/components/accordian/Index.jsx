import data from "./data";
import { useState } from "react";
import  "./styles.css"

export default function Accordain() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple]= useState([]);

  function handleSingleSelection(getCurrentid) {
    setSelected(getCurrentid === selected ? null :getCurrentid);
  }
  function handleMultiSection(getCurrentid){
    let cpymultiple = [...multiple];
    const findIndexOfCurrentId = cpymultiple.indexOf(getCurrentid)

    if (findIndexOfCurrentId === -1) cpymultiple.push(getCurrentid)
    else cpymultiple.splice(findIndexOfCurrentId , 1)

    setMultiple(cpymultiple);

  }
  return (
    <div className="wrapper">
     <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Section</button>
      <div className="accordain">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={enableMultiSelection 
                ?() => handleMultiSection(dataItem.id)
                :() => handleSingleSelection(dataItem.id) }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              { enableMultiSelection ?
               multiple.indexOf(dataItem.id) !== -1 &&    (              
                  <div className="content">{dataItem.answer}</div>
)
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                )
                
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
