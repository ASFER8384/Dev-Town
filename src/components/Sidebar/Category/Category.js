import React from "react";
import styled from "styled-components";
import Input from "../../Input/Input";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 30px;
  overflow: hidden;
  border:1px solid black;

`;

const SidebarTitle = styled.h2`
  padding: 20px 0;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding:10px;
  gap:10px;
  // border:1px solid black;

  min-height: 100px;

  @media (max-width: 600px) {
    flex-direction: row;
    // gap: 10px;
  }
`;

const CategoryLabelContainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
`;

const Category = ({ handleChange, selectedCategory }) => {
  return (
    <CategoryContainer>
      <SidebarTitle>Category</SidebarTitle>
      <CategoryList className="cat-container">
        <CategoryLabelContainer>
          <input onChange={handleChange} type="radio" value="" name="test" />
          {/* <Checkmark /> */}
          <span style={{ fontSize: "18px",paddingLeft:"5px" }}>All</span>
        </CategoryLabelContainer>
        <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test" />
        <Input handleChange={handleChange} value="flats" title="Flats" name="test" />
        <Input handleChange={handleChange} value="sandals" title="Sandals" name="test" />
        <Input handleChange={handleChange} value="heels" title="Heels" name="test" />
      </CategoryList>
    </CategoryContainer>
  );
};

export default Category;
