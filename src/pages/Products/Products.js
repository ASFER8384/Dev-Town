import React, { useState } from "react";
import styled from "styled-components";
import Contact from "../../components/Contact/Contact";

const CardWrapper = styled.div`
  width: 100%;
`;

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  z-index: -2;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const PagWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PagButton = styled.button`
  padding: 20px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  &.active {
    /* Add your active styles here */
  }
`;

const Card = styled.div`
  margin: 20px;
  width: 350px;
  height: 400px;
  border: 2px solid #ededed;
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid gray;
`;

const CardImg = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const CardTitle = styled.div`
  margin-bottom: 1rem;
`;

const CardReviews = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

const RatingStar = styled.div`
  color: #d5ab55;
`;

const TotalReviews = styled.div`
  font-size: 0.9rem;
  margin-left: 10px;
`;

const CardPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BagIcon = styled.div`
  color: #535353;
`;

const Products = ({ result }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = result.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
    <CardWrapper>
      <CardContainer>
        {currentItems}
      </CardContainer>
      <PagWrapper>
        <div className="pagination">
          {Array.from({ length: Math.ceil(result.length / itemsPerPage) }, (_, index) => (
            <PagButton
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </PagButton>
          ))}
        </div>
      </PagWrapper>
    </CardWrapper>
    </>
  );
};

export default Products;
