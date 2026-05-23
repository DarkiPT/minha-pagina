import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()

    function entrar() {
        navigate("/sobre")
    }
    return (
        <div>

            <p>Seccao login</p>
            <button onClick={entrar}>Login</button>
        </div>
    )
}

export default Login