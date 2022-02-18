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
  .logo {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.55);

    font-size: 1.5rem;
    :hover {
      color: rgba(0, 0, 0, 0.7);
    }
    .navbar-brand {
      margin-right: 0;
    }
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

export const Icon = styled("i")`
  span {
    font-size: 0.6rem;
  }
  > .badge {
    background: #4fcdcc;
  }
`;
