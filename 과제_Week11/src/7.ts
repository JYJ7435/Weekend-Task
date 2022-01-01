/*
아래와 같은 코드가 있을 때 함수 doSomething 내부에 주석처리된
employee는 '' 타입
이라는 문장에서 ''에 알맞은 값을 넣어주세요.

참고: 아래와 같은 동작을 '타입 좁히기(type narrowing)라고 부릅니다.'
*/

interface TeamLeader {
  type: "leader";
  leadingSince: Date;
}

interface Newcomer {
  type: "newcomer";
  major: string;
}

type Employee = TeamLeader | Newcomer;

function doSomething(employee: Employee) {
  switch (employee.type) {
    case "leader": {
      // employee는 '' 타입
      return employee.leadingSince;
    }
    case "newcomer": {
      // employee는 '' 타입
      return employee.major;
    }
    default: {
      // employee는 never 타입
      return null;
    }
  }
}
