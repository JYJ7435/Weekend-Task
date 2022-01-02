/*
아래와 같은 todos 배열이 있는 경우
todos 내부의 id, content, completed에 대한 interface를 작성하세요.
*/

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, content: "HTML", completed: true },
  { id: 2, content: "CSS", completed: false },
  { id: 3, content: "Javascript", completed: true },
];
