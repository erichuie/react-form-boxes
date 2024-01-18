
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

function Box( { id, backgroundColor, width, height, removeBox } ){
  return (
    <div>
      <div style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height
        }}>
      </div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;