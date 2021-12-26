import React, { useEffect, useReducer } from "react";
import axios from "axios";

/**
 * Q2) 현재 발생 중인 에러(Unhandled action type: undefined)를 수정해주세요. (5pt)
 * 버그: dispatch된 액션의 형태가 잘못됨
 * 버그 수정 후:
 * 1. 사용자 목록 렌더링 전 "로딩 중..." 텍스트 노출
 * 2. 사용자 목록이 정상적으로 렌더링
 * 3. 다시 불러오기 버튼 클릭 시 사용자 목록을 재요청 후 렌더링
 * 4. 요청 실패 시 화면에 "에러가 발생했습니다." 텍스트 노출
 *
 * 구현 결과: https://drive.google.com/file/d/1hL0yEWDPwVV01Gj48ZqkpTLrekqD8r47/view?usp=sharing
 * (Q1의 결과와 동일)
 */

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const getUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const { loading, error, data: users } = state;
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
