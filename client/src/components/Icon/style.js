import styled from "styled-components"

export const StyledIcon = styled.img`
  height: ${(props) => props.height ?? "100px"};
  width: ${(props) => props.width ?? "100px"};
  padding: ${(props) => props.padding};
  align-self: center;
`
