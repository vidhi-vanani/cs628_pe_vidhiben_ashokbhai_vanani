import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    color: #ddd;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Recipe List</NavLink>
      <NavLink to="/add">Add Recipe</NavLink>
    </Nav>
  );
}

export default Navbar;