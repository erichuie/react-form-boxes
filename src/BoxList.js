import { useState } from "react";

import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Box list component with array of boxes
 *
 * Props:
 * -None
 *
 * States:
 * -boxes [{backgroundColor, width height},...]
 *
 * App -> BoxList -> NewBoxForm / Box
 */

function BoxList(){
  const [boxes, setBoxes] = useState([]);

  /** Add a box to box list */
  function addBox(boxToAdd) {
    setBoxes([...boxes, boxToAdd]);
  }

  /** create div elements for boxes in list */
  function renderBoxes() {
    return <div>
      {boxes.map(box =>
        <Box
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