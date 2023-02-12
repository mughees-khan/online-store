import "./user.css"
import "../admin/admin.css"
import { useEffect, useState } from "react";
import { getRealTimeItems } from "../../config/firebas";
import cartLogo from "../../images/cart.png"
import homeLogo from "../../images/home.png"
import mainImg from "../../images/main.jpg"
import accountLogo from "../../images/user.png"
import { useNavigate } from "react-router-dom"
import addLogo from "../../images/addcard.png"
function User() {
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
        <div>
            <div className="user-mains">
                <div className="super-img">
                    <h1>SAYLAYNY WELFARE</h1>
                    <h3>Discount Store</h3>
                    <img className="main-img" src={mainImg} alt="" />
                </div>
            </div>

            <div className="all-usedcar-ads">
                {adds.map((add) =>
                (

                    <div className="card">
                        <img className="card-img" src={add.imageUrl} />
                        <div className="card-text">
                            <div>
                                <h3 className="card-carinfo">{add.itemName}</h3>
                                <img onClick={() => navigate("/cart")} className="add-logo" src={addLogo} alt="" />
                            </div>
                            <h4 className="card-price">{add.unitName}kg</h4>
                            <p>{add.description}</p>
                        </div>
                        <div>
                            <h2>Rs {add.unitprice}-per kg</h2>
                        </div>
                    </div>

                )
                )}


            </div>



            <div className="foot">
                <div onClick={() => navigate("/user")} className="foot-sty">
                    <img className="foot-logos" src={homeLogo} alt="" />Home
                </div>
                <div onClick={() => navigate("/card")} className="foot-sty">
                    <img className="foot-logos" src={cartLogo} alt="" />card</div>
                <div onClick={() => navigate("/setting")} className="foot-sty">
                    <img className="foot-logos" src={accountLogo} alt="" />Account
                </div>

            </div>
        </div>
    )
}
export default User