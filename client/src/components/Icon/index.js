import { StyledIcon } from "./style"

const Icon = (props) => {
  return (
    <StyledIcon
      src={props.image}
      height={props.height}
      width={props.width}
      padding={"0 0 0 4px"}
      alt={props.alt}
    ></StyledIcon>
  )
}

export default Icon
