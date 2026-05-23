import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import Jogos from "./pages/Jogos"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"


function App() {

  return (

    <div>
      <h1>Ola</h1>
      <nav>
        <Link to={"/"}> Home </Link>
        <Link to={"/jogos"}> Jogos </Link>
        <Link to={"/sobre"}> Sobre </Link>
        <Link to={"/login"}> Login </Link>

      </nav>


      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/jogos" element={<Jogos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </div>
  )

}

export default App
