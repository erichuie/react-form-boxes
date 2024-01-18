
/** Form for creating a new box and adding it to list
 *
 * Props:
 * -addBox (function to add box to boxlist)
 *
 * States:
 * -None
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {

  const initialState = {
    backgroundColor: "",
    width: "0px",
    height: "0px",
  };
  const [formData, setFormData] = useState(initialState);

  /** Send {backgroundColor, width, height} to box list, clear form */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** Update local form state with input */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColorInput">Background Color:</label>
      <input
        id="backgroundColorInput"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="widthInput">Width:</label>
      <input
        id="widthInput"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="heightInput">Width:</label>
      <input
        id="heightInput"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
    </form>
  )

}

export default NewBoxForm;