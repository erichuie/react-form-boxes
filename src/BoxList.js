import { useState } from "react";

import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

/** Box list component with array of boxes
 *
 * Props:
 * -None
 *
 * States:
 * -boxes [{id, backgroundColor, width, height},...]
 *
 * App -> BoxList -> NewBoxForm / Box
 */

function BoxList(){
  const [boxes, setBoxes] = useState([]);

  /** Add a box to box list */
  function addBox(boxToAdd) {
    // boxToAdd.id = uuid();
    setBoxes([...boxes, boxToAdd]);
  }

  /** Remove a box from the box list */
  function removeBox(currId){
    console.log("here", currId);
    const newBoxes = boxes.filter(box => box.id !== currId);
    setBoxes(newBoxes);
  }

  //could place contents of function directly in overall returning JSX
  /** create div elements for boxes in list */
  function renderBoxes() {
    return <div>
      {/* //could destructure box   */}
      {boxes.map(box =>
        <Box
          id={box.id}
          key={box.id}
          removeBox={removeBox}
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
      />)}
    </div>
  }

  return(
    <div>
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>
  );
}

export default BoxList;