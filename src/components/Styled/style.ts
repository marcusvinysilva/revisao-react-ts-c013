import styled from "styled-components";

export const Title = styled.h1`
  color: red;
  // font-size: ${(props) => `${props.tamanho}px`};
  background: black;

  span {
    font-size: 12px
  }
`;

export const TitleSmall = styled(Title)`
  font-size: 16px
`