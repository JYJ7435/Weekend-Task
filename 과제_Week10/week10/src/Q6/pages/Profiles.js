import React, { useEffect, useState } from "react";
import axios from "axios";

function Profiles() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setUsers(null);
        setError(null);
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getUsers();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <div>
      <h3>프로필 목록</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <h2>{user.username}</h2>
              <p>
                <b>Email: </b> {user.email}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profiles;
