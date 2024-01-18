import { useState } from "react";

function BoxList(){
  const [boxes, setBoxes] = useState([]);

  return(
    <div>
      <NewBoxForm />
      { boxes.map(box =>
      <Box backgroundColor={box.backgroundColor}
      width={box.width} height={box.height}/>) }
    </div>
  );
}