import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  border: 2px solid black;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 15vh;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  overflow: hidden;
`;

const NavInput = styled.input`
  overflow: hidden;
  padding:10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  padding: 20px 50px;
`;

const NavIcons = styled(AiOutlineUserAdd)`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 2rem;
`;

const Nav = ({ handleInputChange, query }) => {
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <h2>DevTown</h2>
        </Link>
      </div>
      <div className="nav-container">
        <NavInput
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <Link>
          <NavIcons className="nav-icons" />
        </Link>
      </div>
    </NavContainer>
  );
};

export default Nav;
