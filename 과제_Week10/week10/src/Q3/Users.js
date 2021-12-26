import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";

/**
 * Q3) 현재 발생 중인 버그를 수정해주세요. (5pt)
 * 버그: "불러오기" 버튼 클릭 전 사용자 목록이 이미 렌더링되어 있음
 * 버그 수정 후:
 * 1. 사용자 목록 렌더링 전 "불러오기" 버튼이 우선적으로 노출
 * 2. "불러오기" 버튼 클릭 시 사용자 목록을 요청
 * 3. 사용자 목록 렌더링 전 "로딩 중..." 텍스트가 노출
 * 4. 사용자 목록이 정상적으로 렌더링
 * 5. 다시 불러오기 버튼 클릭 시 사용자 목록을 재요청 후 렌더링
 * 6. 요청 실패 시 화면에 "에러가 발생했습니다." 텍스트 노출
 *
 * hint: useAsync hook 파라미터
 * 구현 결과: https://drive.google.com/file/d/1gJnbMjRisFxIbry-4Hdp7UiH1z5B7L32/view?usp=sharing
 */

async function getUsers() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers, [], true);
  const [userId, setUserId] = useState(null);

  const { loading, error, data: users } = state;
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
