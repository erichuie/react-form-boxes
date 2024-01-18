
/** Box component for individual box
 *
 * Props:
 * -id
 * -backgroundColor
 * -width
 * -height
 * -removeBox: callback function passed in
 *
 * States:
 * -None
 *
 * BoxList -> Box
 */

//could set default values for arguments
//insert the value of width/height and concatenate a px, %, or em with string concat
function Box( { id, backgroundColor, width, height, removeBox } ){
  return (
    <div>
      <div style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height
        }}>
      </div>
      {/* make own function outside return statement for removeBox */}
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;