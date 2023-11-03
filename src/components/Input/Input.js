import React from "react";
import styled from "styled-components";

const InputContainer = styled.label`
  display: block;
  position: relative;
  // padding-left: 35px;
  // margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
`;

const InputRadio = styled.input`
  position: relative;
  cursor: pointer;
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

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <InputContainer>
      <InputRadio onChange={handleChange} type="radio" value={value} name={name} />
      <span style={{fontSize: "18px",paddingLeft:"5px" }}>{title}</span>
    </InputContainer>
  );
};

export default Input;
