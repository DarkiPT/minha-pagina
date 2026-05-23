import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import Jogos from "./pages/Jogos"
import Sobre from "./pages/Sobre"


function App() {

  return (

    <div>
      <h1>Ola</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/jogos"}>Jogos</Link>
        <Link to={"/sobre"}>Sobre </Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/jogos" element={<Jogos />}></Route>
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

    </div>
  )

}

export default App
