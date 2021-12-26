import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User from "./User";

/**
 * Q4) 현재 발생 중인 버그를 수정해주세요. (5pt)
 * 버그: useAsync hook으로부터 data, error, isLoading, reload, run을 디스트럭처링 할당할 수 없음
 * 버그 수정 후:
 * 1. 사용자 목록 렌더링 전 "불러오기" 버튼이 우선적으로 노출
 * 2. "불러오기" 버튼 클릭 시 사용자 목록을 요청
 * 3. 사용자 목록 렌더링 전 "로딩 중..." 텍스트가 노출
 * 4. 사용자 목록이 정상적으로 렌더링
 * 5. 다시 불러오기 버튼 클릭 시 사용자 목록을 재요청 후 렌더링
 * 6. 요청 실패 시 화면에 "에러가 발생했습니다." 텍스트 노출
 *
 * hint: https://docs.react-async.com/api/options
 * 구현 결과: https://drive.google.com/file/d/1gJnbMjRisFxIbry-4Hdp7UiH1z5B7L32/view?usp=sharing
 * (Q3의 결과와 동일)
 */

async function getUsers() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const {
    data: users,
    error,
    isLoading,
    reload,
    run,
  } = useAsync({
    deferFn: getUsers,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={run}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={reload}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
