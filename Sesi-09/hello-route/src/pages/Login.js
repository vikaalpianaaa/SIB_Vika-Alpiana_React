import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        localStorage.setItem("token", "login");
        navigate(from, { replace: true })
    }

    return (
        <>
            <h1>Login Page</h1>
            <p>Klik the button to login</p>
            <button
                className="login-button"
                onClick={() => handleLogin()}
            >
                Login
            </button>
        </>
    )
}

export default Login;