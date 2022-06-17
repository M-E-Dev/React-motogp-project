import "./App.scss"
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return(
    <div className="App">
      <Navbar/>
      <br />
      <Header/>
      <br />
      <Main/>

    </div>
  )
}

export default App;