import Switch from "react-switch"
import { Sun, Moon } from "react-feather"
import store from "../../store"
import { useState } from "react"
import { StyledSwitchContainer } from "./style"

const Toggle = (props) => {
  const [state, setState] = useState(store.getState())

  store.subscribe(() => {
    setState(store.getState())
  })

  const handleChange = () => {
    store.dispatch({
      type: "UPDATE_THEME",
      data: { darkMode: !state.options.darkMode },
    })
  }

  return (
    <StyledSwitchContainer>
      <Switch
        onChange={handleChange}
        checked={state.options.darkMode}
        uncheckedIcon={
          <Sun
            size={20}
            style={{
              position: "absolute",
              top: "4px",
              left: "4px",
              cursor: "pointer",
              zIndex: "15",
            }}
          />
        }
        checkedIcon={
          <Moon
            size={20}
            style={{
              position: "absolute",
              top: "4px",
              left: "4px",
              cursor: "pointer",
              zIndex: "15",
            }}
          />
        }
      />
    </StyledSwitchContainer>
  )
}

export default Toggle
