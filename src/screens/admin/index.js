import "./admin.css"
import adminPic from "../../images/admin.jpeg"
import logo from "../../images/form.png"
import homeLogo from "../../images/home.png"
import plusLogo from "../../images/plus.png"
import accountLogo from "../../images/user.png"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getRealTimeItems } from "../../config/firebas"
function Admin() {
    const [adds, setAds] = useState([]);
    function getItems() {
        getRealTimeItems((ads) => {
            setAds(ads);
        });
    }
    useEffect(() => {
        getItems();
    }, []);
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
                    <img onClick={() => navigate("/order")} className="logo" src={logo} alt="" />
                </div>

            </div>
            <h1 className="product">All products</h1>
            <div className="all-usedcar-ads">
                {adds.map((add) =>
                (

                    <div className="card">
                        <img className="card-img" src={add.imageUrl} />
                        <div className="card-text">
                            <h3 className="card-carinfo">{add.itemName}</h3>
                            <h4 className="card-price">{add.unitName}kg</h4>

                        </div>
                        <div>
                            <h2>{add.unitprice}pkr</h2>
                        </div>
                    </div>

                )
                )}


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