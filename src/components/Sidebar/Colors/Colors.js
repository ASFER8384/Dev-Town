import React from "react";
import styled from "styled-components";
import Input from "../../Input/Input";

const ColorsContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SidebarTitle = styled.h2`
  padding: 20px 0;
`;

const ColorList = styled.div`
  flex-wrap: wrap;
  min-height: 100px;
  // border:1px solid black;
  display: flex;
  padding:10px;
  gap:10px;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction:row;
    justify-content: flex-start;
    align-items:flex-start;
    // gap: 10px;
  }
`;

const ColorLabelContainer = styled.label`
  display: flex;
  align-items: center;

  input[type="radio"] {
    margin-right: 5px;
  }
`;

const Checkmarkall = styled.span`
background: linear-gradient(blue, crimson);
  border: 2px solid black;
`;
const Checkmark = styled.span`
background: ;
  border: 2px solid black;
`;

const Colors = ({ handleChange }) => {
  return (
    <ColorsContainer className="color-div">
      <SidebarTitle className="sidebar-title color-title">Colors</SidebarTitle>
      <ColorList className="color-list">
        <ColorLabelContainer className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          {/* <Checkmarkall className="checkmark all"></Checkmarkall> */}
          <span style={{ fontSize: "18px", }}>All</span>
        </ColorLabelContainer>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <ColorLabelContainer className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="white" name="test1" />
          {/* <Checkmark className="checkmark"></Checkmark> */}
          <span style={{ fontSize: "18px" }}>White</span>
        </ColorLabelContainer>
      </ColorList>
    </ColorsContainer>
  );
};

export default Colors;
