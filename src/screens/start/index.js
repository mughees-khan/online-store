import "./start.css"
import startLogo from "../../images/start-logo.jfif"
import { useNavigate } from "react-router-dom";
function Start() {
    const navigate = useNavigate();
    return (
        <div className="start">
            <div className="start-main">
                <div className="start-box">
                    <img className="start-logo" src={startLogo} alt="" />
                    <h1 className="start-heading">SAYLANI WELFARE</h1>
                    <h3 className="start-para">ONLINE DISCOUNT STORE</h3>
                </div>
                <div className="start-btn">
                    <button className="start-button" onClick={() => navigate("/signup")}>Get Started</button>

                </div>
            </div>
        </div>
    )
}
export default Start;