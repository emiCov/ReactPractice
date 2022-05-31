export default function CustomButton(props) {
  const buttonName = props.name;
  function handleClick() {
    alert("You clicked " + buttonName);
  }

  return <button onClick={handleClick}>{buttonName}</button>;
}
