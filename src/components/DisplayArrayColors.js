export default function DisplayArrayColors(props) {
  const id = props.id;
  const name = props.name;
  const favoriteColor = props.favoriteColor;

  const spanStyle = { color: favoriteColor };

  return (
    <div>
      <ul>
        <li>
          id: {id}, name: <span style={spanStyle}>{name}</span>, favorite color:{" "}
          {favoriteColor}
        </li>
      </ul>
    </div>
  );
}
