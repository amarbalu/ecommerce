import styled from "styled-components";

export const Container = styled("nav")`
  &.navbar {
    padding: 1rem;
  }
  .link {
    text-decoration: none;
  }
  img {
    height: 50px;
    width: 50px;
  }
`;

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  outline: none;
  border: none;
  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0;
  }
`;
