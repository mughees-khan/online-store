import "./admin.css"
import adminPic from "../../images/admin.jpeg"
import logo from "../../images/form.png"
import homeLogo from "../../images/home.png"
import plusLogo from "../../images/plus.png"
import accountLogo from "../../images/user.png"
import { useNavigate } from "react-router-dom"
function Admin() {
    const navigate = useNavigate()
    return (
        <div className="admin-super-main">
            <div className="admin-main">

                <div>
                    <img className="profile" src={adminPic} alt="" />
                </div>

                <div>
                    <h1 className="name">Mughees khan</h1>
                    <h3 className="bio">Admin</h3>
                </div>
                <div>
                    <img onClick={() => navigate("/form")} className="logo" src={logo} alt="" />
                </div>

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
export default Admin