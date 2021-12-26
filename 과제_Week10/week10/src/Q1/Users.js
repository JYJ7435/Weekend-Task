import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * Q1) 현재 발생 중인 에러(users.map is not a function)를 수정해주세요. (5pt)
 * 버그: users가 배열이 아님
 * 버그 수정 후:
 * 1. 사용자 목록 렌더링 전 "로딩 중..." 텍스트 노출
 * 2. 사용자 목록이 정상적으로 렌더링
 * 3. 다시 불러오기 버튼 클릭 시 사용자 목록을 재요청 후 렌더링
 * 4. 요청 실패 시 화면에 "에러가 발생했습니다." 텍스트 노출
 *
 * 구현 결과: https://drive.google.com/file/d/1hL0yEWDPwVV01Gj48ZqkpTLrekqD8r47/view?usp=sharing
 */

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
