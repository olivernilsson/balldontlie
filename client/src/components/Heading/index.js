import { StyledHeading } from "./style"

const Heading = (props) => {
  return (
    <StyledHeading
      as={props.type}
      alignment={props.alignment}
      color={props.color}
    >
      {props.content}
    </StyledHeading>
  )
}

export default Heading
