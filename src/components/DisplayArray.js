export default function DisplayArray(props) {
  const elem = props.element;

  return (
    <div>
      <ul>
        <li>{elem}</li>
      </ul>
    </div>
  );
}
