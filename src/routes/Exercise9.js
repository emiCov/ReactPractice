import { useEffect, useState } from "react";
import DisplayUsers from "../components/DisplayUsers";

function Exercise9() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    const baseURL = "https://random-data-api.com/api/users/random_user?size=10";

    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div>
        <p>
          Fetch the data from this URL:
          <a href="https://random-data-api.com/api/users/random_user?size=10">
            https://random-data-api.com/api/users/random_user?size=10
          </a>
          . This will return a list of 10 random users.
          <br />
          Store it in React state and render a list with the information
          retrieved.
        </p>
        <div className="solution-container">
          {users.map((user) => {
            return <DisplayUsers key={user.id} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Exercise9;
