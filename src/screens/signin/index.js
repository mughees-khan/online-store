import "./signin.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInFirebase } from "../../config/firebas";


function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    async function signin() {
        try {
            const active = await signInFirebase(email, password);
            let admin = active.user.email
            console.log(active.user)
            admin == "admin@gmail.com" ? navigate("/admin") : navigate("/user");


        } catch (e) {
            alert("Wrong email or pass");
        }
    }
    return (
        <div className="login-main">
            <div className="login">
                <h1 className="login-heading">Login In</h1>
                <input
                    className="login-fields"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Enter your email"
                />
                <input
                    className="login-fields"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Enter your password"
                />
                <button onClick={signin} className="login-btn">
                    login
                </button>
                <p className="login-signup">
                    You have no account ?
                    <a href="Signup" className="login-signup-link">
                        signup
                    </a>
                </p>
            </div>
        </div>
    );
}
export default Signin;