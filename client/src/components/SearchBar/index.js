import React from "react"
import { StyledSearch, SearchWrapper } from "./style"
import { Search } from "react-feather"

const SearchBar = () => {
  return (
    <SearchWrapper>
      <Search
        color="black"
        size={24}
        style={{ position: "relative", left: "36px" }}
      ></Search>
      <StyledSearch></StyledSearch>
    </SearchWrapper>
  )
}

export default SearchBar
