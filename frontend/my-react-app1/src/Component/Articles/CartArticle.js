import React from 'react'
import { useCart } from "react-use-cart";
import Button from '@mui/material/Button';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const CartArticle = () => {
    //const alert = useAlert()
    let navigate = useNavigate();

    const {
        isEmpty,
        totalItems,
        cartTotal,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const handleSubmit = () => {

        toast.success("commande validé", {
            position: "top-center"
        });
        navigate("/ArticlesCard");
    }

    if (isEmpty) return <h1>Votre panier est vide </h1>;

    return (
        <>
            <ul>
                {items.map((item) => (
                    <div className="row no-gutters py-2">

                        <div className="col-sm-2 p-2">
                            <img
                                alt={item.designation}
                                style={{ margin: "0 auto", maxHeight: "70px" }}
                                src={item.imageartpetitf} className="img-fluid d-block"
                            />
                        </div>

                        <div className="col-sm-4 p-2">
                            <h5 className="mb-1">{item.designation}</h5>
                            <p className="mb-1">Prix: {item.price} </p>
                        </div>

                        <div className="col-sm-2 p-2 text-center ">
                            <p className="mb-0">Quantité: {item.quantity}</p>
                        </div>

                        <div className="col-sm-4 p-2 text-right">
                            <Button variant="contained" color="success" onClick={() => {
                                if (item.quantity < item.qtestock)
                                    updateItemQuantity(item.id, item.quantity + 1);
                                else
                                    alert("Quantité stock indisponible")
                            }}>
                                +
                            </Button>
                            {
                                item.quantity > 1 &&
                                <Button variant="contained" color="success" onClick={() => {
                                    if (item.quantity < item.qtestock)
                                        updateItemQuantity(item.id, item.quantity - 1);
                                    else
                                        alert("Quantité stock indisponible")
                                }}>
                                    -
                                </Button>
                            }
                            {
                                item.quantity === 1 &&
                                <Button variant="contained" color="error" onClick={() =>
                                    removeItem(item.id)}>
                                    -
                                </Button>
                            }
                        </div>
                    </div>
                ))}
            </ul>

            <div className="container">
                <div style={{ "display": "flex" }}>
                    <div className="col-10">
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txtright">{totalItems}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{cartTotal} TND</h3>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <Button variant="contained">
                                        {<Link to={"/ArticlesCard"} style={{ textDecoration: "none", color: "white" }}>RETOUR</Link>}
                                    </Button><br /><br />


                                    <Button variant="contained" color="success" onClick={(event) => handleSubmit(event)}>
                                        VALIDER</Button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartArticle
