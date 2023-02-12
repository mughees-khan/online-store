import "./home.css"
import "../admin/admin.css"
import adminPic from "../../images/admin.jpeg"
import logo from "../../images/form.png"
import homeLogo from "../../images/home.png"
import plusLogo from "../../images/plus.png"
import accountLogo from "../../images/user.png"
import { useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <h1 className="head">Settings</h1>
            <div className="pics"><img className="profile profile-one" src={adminPic} alt="" /></div>
            <div className="pics">
                <input placeholder="Update name" type="text" />
                <button className="ad-btn">Add</button>
            </div>
            <div className="picd">
                <h1 >all categories</h1>
                <h2 className="cat">fruits</h2>
                <h2 className="cat">Meals</h2>
                <h2 className="cat">vegetables</h2>
            </div>
            <div className="pics">
                <button onClick={() => navigate("/signin")} className="log-btn">Logout</button>
            </div>

            <div className="foot">
                <div onClick={() => navigate("/home")} className="foot-sty">
                    <img onClick={() => navigate("/home")} className="foot-logos" src={homeLogo} alt="" />Home
                </div>
                <div onClick={() => navigate("/form")} className="foot-sty">
                    <img className="foot-logos" src={plusLogo} alt="" />Add Items</div>
                <div onClick={() => navigate("/setting")} className="foot-sty">
                    <img className="foot-logos" src={accountLogo} alt="" />Account
                </div>

            </div>
        </div>
    )
}
export default Home;