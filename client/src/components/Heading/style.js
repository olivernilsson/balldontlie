import styled from "styled-components"

export const StyledHeading = styled.h1`
  text-align: ${(props) => props.alignment};
  display: flex;
  font-family: "Monoton", cursive;
  color: ${(props) => props.color};
`
