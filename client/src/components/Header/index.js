import React from "react"
import { StyledHeader } from "./style"
import Icon from "../Icon"
import headerImage from "../../images/crying_jordan.png"
import Heading from "../Heading"
import Toggle from "../Toggle"

const Header = () => {
  return (
    <StyledHeader>
      <Icon
        image={headerImage}
        height={"80px"}
        width={"65px"}
        alt={"Crying Jordan image"}
      ></Icon>
      <Heading
        content={"Balldontlie"}
        type={"h1"}
        alignment={"center"}
        color={"#F79334"}
      ></Heading>
      <Toggle />
    </StyledHeader>
  )
}

export default Header
