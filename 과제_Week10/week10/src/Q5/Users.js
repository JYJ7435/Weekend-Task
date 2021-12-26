import React, { useState } from "react";
import User from "./User";
import { getUsers, useUsersState, useUsersDispatch } from "./UsersContext";

/**
 * Q5) 현재 발생 중인 버그를 수정해주세요. (5pt)
 * 버그: useUsersState, useUsersDispatch hook의 값이 서로 뒤바뀌어있음
 * 버그 수정 후:
 * 1. useUsersState hook은 UsersStateContext를 사용한다.
 * 2. useUsersDispatch hook은 UsersDispatchContext를 사용한다.
 * 3. 사용자 목록 렌더링 전 "불러오기" 버튼이 우선적으로 노출
 * 4. "불러오기" 버튼 클릭 시 사용자 목록을 요청
 * 5. 사용자 목록 렌더링 전 "로딩 중..." 텍스트가 노출
 * 6. 사용자 목록이 정상적으로 렌더링
 * 7. 다시 불러오기 버튼 클릭 시 사용자 목록을 재요청 후 렌더링
 * 8. 요청 실패 시 화면에 "에러가 발생했습니다." 텍스트 노출
 *
 * 구현 결과: https://drive.google.com/file/d/1gJnbMjRisFxIbry-4Hdp7UiH1z5B7L32/view?usp=sharing
 * (Q4의 결과와 동일)
 */

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
