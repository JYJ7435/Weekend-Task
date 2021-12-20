import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 100px;
  margin: 20px 0;
`;

function Exam2() {
  const fruitStore = [
    {
      id: 1,
      product: "사과",
      price: 1000,
      amount: 5,
    },
    {
      id: 2,
      product: "키위",
      price: 800,
      amount: 3,
    },
    {
      id: 3,
      product: "복숭아",
      price: 1200,
      amount: 6,
    },
    {
      id: 4,
      product: "배",
      price: 1500,
      amount: 7,
    },
  ];

  return (
    <div>
      {fruitStore.map((fruit) => (
        <Container key={fruit.id}>
          <Item>과일명:{fruit.product}</Item>
          <Item>가격:{fruit.price}</Item>
          <Item>재고:{fruit.amount}</Item>
        </Container>
      ))}
    </div>
  );
}

export default Exam2;
