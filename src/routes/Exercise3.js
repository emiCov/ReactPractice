import CustomButton from "../components/CustomButton";

const buttons = ["Button 1", "Button 2", "Button 3", "Button 4"];

function Exercise3() {
  return (
    <div>
      <div>
        <p>
          Create a custom Button component and render it four times. On click,
          it should alert which button was clicked, by displaying the name of
          the button.
        </p>
      </div>
      <div className="solution-container">
        {buttons.map((name, index) => (
          <CustomButton key={index} name={name} />
        ))}
      </div>
    </div>
  );
}

export default Exercise3;
