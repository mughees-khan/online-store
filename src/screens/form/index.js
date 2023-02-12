import "./form.css"
import "../admin/admin.css"
import adminPic from "../../images/admin.jpeg"
import logo from "../../images/form.png"
import homeLogo from "../../images/home.png"
import plusLogo from "../../images/plus.png"
import accountLogo from "../../images/user.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postItemToDb, uploadImage } from "../../config/firebas";

function Formm() {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [des, setDes] = useState("");
    const [image, setImage] = useState("");
    const [unitName, setUnitName] = useState("");
    const [unitPrice, setUnitPrice] = useState("");

    const upload = (e) => {
        if (e.target.value) {
            setImage(e.target.files[0]);
        }
    };
    const navigate = useNavigate();
    async function postItem() {
        try {
            const imageUrl = await uploadImage(image);
            await postItemToDb(
                itemName,
                category,
                des,
                imageUrl,
                unitName,
                unitPrice
            );

            navigate("/home");
        } catch (e) {
            console.log(e);
            alert("please fill the all required fields");
        }
    }
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
                    <img className="logo" src={logo} alt="" />
                </div>

            </div>



            <div className="main-postadd">
                <div className="postadd-allfields">
                    <h1 className="postadd-form-heading">Add item</h1>
                    <div className="postadd-text-fields">
                        <h3>Item Name:</h3>
                        <input
                            onChange={(e) => setItemName(e.target.value)}
                            className="postadd-fields"
                            type="text"
                            placeholder="Item Name"
                            required
                        />
                    </div>
                    <div className="postadd-text-fields">
                        <h3>Category:</h3>
                        <input
                            onChange={(e) => setCategory(e.target.value)}
                            className="postadd-fields"
                            type="text"
                            placeholder="Category"
                            required
                        />
                    </div>
                    <div>
                        <h3>Description:</h3>
                        <textarea
                            onChange={(e) => setDes(e.target.value)}
                            placeholder="Describe this item:"
                            name=""
                            id=""
                            cols="70"
                            rows="10"
                        ></textarea>
                    </div>
                    <div>
                        <h3>Photos:</h3>
                        <input
                            onChange={upload}
                            className="postadd-fields"
                            type="file"
                            required
                        />
                    </div>

                    <div className="postadd-text-fields">
                        <h3>unit name:</h3>
                        <input
                            onChange={(e) => setUnitName(e.target.value)}
                            className="postadd-fields"
                            type="text"
                            placeholder="Kg or ltr or pcs"
                            required
                        />
                    </div>
                    <div className="postadd-text-fields">
                        <h3>Unit Price:</h3>
                        <input
                            onChange={(e) => setUnitPrice(e.target.value)}
                            className="postadd-fields"
                            type="text"
                            placeholder="PKR"
                            required
                        />
                    </div>
                    <div className="btnm">
                        <button onClick={postItem} className="submit-btn">
                            Add Product
                        </button>
                    </div>
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
export default Formm;