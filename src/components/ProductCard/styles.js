import styled from "styled-components";

export const CartContainer = styled("div")`
  button {
    width: 50%;
    margin: 0 auto;
    transform: translate(0px, 50%);
  }
  .image-wrapper {
    position: relative;
    padding-top: 100%;
    .inner {
      position: absolute !important;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;
