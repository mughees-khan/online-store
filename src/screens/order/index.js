import "./oredr.css"
import adminPic from "../../images/admin.jpeg"
import { useNavigate } from "react-router-dom"
import logo from "../../images/form.png"
import "../admin/admin.css"
function Order() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="admin-main">

                <div>
                    <img className="profile" src={adminPic} alt="" />
                </div>

                <div>
                    <h1 className="name">Mughees khan</h1>
                    <h3 className="bio">Admin</h3>
                </div>
                <div>
                    <img onClick={() => navigate("/order")} className="logo" src={logo} alt="" />
                </div>

            </div>
            <div>
                <h1 className="order-head">
                    Orders
                </h1>
            </div>
        </div>
    )
}
export default Order