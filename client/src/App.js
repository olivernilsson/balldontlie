import { GlobalStyle } from "./globalStyle"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SearchBar />
    </div>
  )
}

export default App
