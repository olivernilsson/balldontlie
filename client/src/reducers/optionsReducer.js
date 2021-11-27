export default function options (state = {darkMode: true}, action) {
  switch (action.type) {

      case "UPDATE_THEME":
          return action.data

      default:
          return state

  }

}