let todos = [
  // {
  //   id: 1,
  //   text: "redux 공부하기",
  //   done: false,
  // },
  // {
  //   id: 2,
  //   text: "redux-thunk 공부하기",
  //   done: false,
  // },
  // {
  //   id: 3,
  //   text: "redux-saga 공부하기",
  //   done: false,
  // },
];
let nextId = 4;

export const fetchTodos = () =>
  new Promise((res) => {
    setTimeout(() => {
      console.log("todos 불러오기");
      res(todos);
    }, 1000);
  });

export const postTodo = (text) =>
  new Promise((res) => {
    todos = [...todos, { id: nextId++, text, done: false }];
    setTimeout(() => {
      console.log("todo 추가");
      res(todos);
    }, 200);
  });
