export default function DisplayUsers(props) {
  const userId = props.user.id;
  const userUid = props.user.uid;
  const userFirstName = props.user.first_name;
  const userLastName = props.user.last_name;

  return (
    <div>
      <ul>
        <li>
          id: {userId}, uid: {userUid}, First name: {userFirstName}, Last name:{" "}
          {userLastName}
        </li>
      </ul>
    </div>
  );
}
