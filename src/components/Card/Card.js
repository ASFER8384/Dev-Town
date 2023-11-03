import React from "react";
import styled from "styled-components";

const CardContainer = styled.section`
  margin: 20px;
  width: 250px;
  height: 400;
  border: 2px solid #ededed;
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items:flex-start;
  flex-direction: column;
  border: 2px solid gray;
`;

const CardImg = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  min-height:100px;
  align-items: flex-start;
  justify-content:space-between;
  // border:1px solid black;
`;

const CardTitle = styled.h3`
  // margin-bottom: 1rem;
`;

const CardDesc = styled.p`

font-size:10px;


`

const CardPrice = styled.div`
`;

const Price = styled.div`
  font-weight: bold;
`;

const BagIcon = styled.div`
  color: #535353;
`;

const Card = ({ img, title, newPrice,desc }) => {
  return (
    <CardContainer>
      <CardImg src={img} alt={title} />
      <CardDetails>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
        <CardPrice>
          <Price>${newPrice}</Price>
        </CardPrice>
      </CardDetails>
    </CardContainer>
  );
};

export default Card;
