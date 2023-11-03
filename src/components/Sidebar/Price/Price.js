import React from "react";
import styled from "styled-components";
import Input from "../../Input/Input";

const PriceContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;

  @media (max-width: 600px) {
    .price-list {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
  align-items: flex-start;
      gap: 10px;
    }
  }
`;

const SidebarTitle = styled.h2`
  padding: 20px 0;
`;

const PriceList = styled.div`
  flex-wrap: wrap;
  // border:1px solid black;
  display:flex;
  flex-direction:column;
  padding:10px;
  gap:10px;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100px;
`;

const Price = ({ handleChange }) => {
  return (
    <PriceContainer className="ml price-div">
      <SidebarTitle className="sidebar-title price-title">Price</SidebarTitle>
      <PriceList className="price-list">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          {/* <span className="checkmark"></span> */}
          <span style={{ fontSize: "18px",paddingLeft:"5px" }}>All</span>
        </label>

        <Input handleChange={handleChange} value={50} title="$0 - 50" name="test2" />
        <Input handleChange={handleChange} value={100} title="$50 - $100" name="test2" />
        <Input handleChange={handleChange} value={150} title="$100 - $150" name="test2" />
        <Input handleChange={handleChange} value={200} title="Over $150" name="test2" />
      </PriceList>
    </PriceContainer>
  );
};

export default Price;
