import React from "react";
import styled from "styled-components";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const SidebarContainer = styled.section`
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const PriceColorContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LogoContainer = styled.div`
  margin-bottom: 4rem;

  h1 {
    margin-top: 1.3rem;
  }
`;

const Sidebar = ({ handleChange, selectedCategory }) => {
  return (
    <SidebarContainer>
      <Category handleChange={handleChange} selectedCategory={selectedCategory} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </SidebarContainer>
  );
};

export default Sidebar;
