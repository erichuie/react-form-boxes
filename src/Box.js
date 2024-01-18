
/** Box component for individual box
 *
 * Props:
 * -backgroundColor
 * -width
 * -height
 *
 * States:
 * -None
 *
 * BoxList -> Box
 */

function Box( {backgroundColor, width, height } ){
  return (
    <div style={{
      backgroundColor: backgroundColor,
      width: width,
      height: height
      }}>
    </div>
  );
}

export default Box;