import { useState } from "react";
import { signUpFirebase } from "../../config/firebas";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    async function signup() {
        try {
            await signUpFirebase({ fullName, email, password, contact });
            navigate("/signin")
        } catch (e) {
            alert("Please enter right information");
        }
    }
    return (
        <div className="signup-main">
            <div className="signup">
                <h1 className="signup-heading">Sign Up</h1>
                <input
                    className="signup-fields"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                />
                <input
                    className="signup-fields"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    className="signup-fields"
                    type="text"
                    placeholder="Enter your contact"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                />
                <input
                    className="signup-fields"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button onClick={signup} className="signup-btn">
                    Sign up
                </button>
                <p className="signup-login">
                    You have already account ?
                    <a href="/Signin" className="signup-login-link">
                        login
                    </a>
                </p>
            </div>
        </div>
    );
}
export default Signup;
