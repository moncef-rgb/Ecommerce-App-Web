import React from 'react'
import { ToastContainer } from 'react-toastify'
import CarouselHome from './Component/CarouselHome'
// import ListRoutes from './Routes/ListRoutes'
// import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbarre from './Component/Navbarre';
import { CartProvider } from 'react-use-cart';
// import { useCart } from 'react-use-cart';
// import SignIn from './Component/SignIn';
import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Home = () => {
    return (
        <div>
            <CartProvider>
                {/* <Router> */}
                <Navbarre />
                <CarouselHome />
                <div style={{ padding: 5, margin: 5 }}>
                    <Button color="success" startIcon={<AddCircleOutlineIcon />} variant="contained" >
                        {<Link to={"/Categories"} style={{ textDecoration: "none", color: "white" }}>Go To Categories</Link>}
                    </Button>
                    <NavLink to="/Categories">go to Categories</NavLink>
                </div>
                <div style={{ padding: 5, margin: 5 }}>
                    <Button color="success" startIcon={<AddCircleOutlineIcon />} variant="contained" >
                        {<Link to={"/Scategories"} style={{ textDecoration: "none", color: "white" }}>Go To Sous-Categories</Link>}
                    </Button>
                    <NavLink to="/Scategories">go to Sous-Categories</NavLink>
                </div>
                <div style={{ padding: 5, margin: 5 }}>
                    <Button color="success" startIcon={<AddCircleOutlineIcon />} variant="contained" >
                        {<Link to={"/ArticlesDatatables"} style={{ textDecoration: "none", color: "white" }}>Go To Articles</Link>}
                    </Button>
                    <NavLink to="/ArticlesDatatables">go to Articles</NavLink>
                </div>
                <div style={{ padding: 5, margin: 5 }}>
                    <Button color="success" startIcon={<AddCircleOutlineIcon />} variant="contained" >
                        {<Link to={"/ArticlesCard"} style={{ textDecoration: "none", color: "white" }}>Go To Articles-Card</Link>}
                    </Button>
                    <NavLink to="/ArticlesCard">Go to Articles-Card</NavLink>
                </div>

                {/* <ListRoutes /> */}
                <ToastContainer />
                {/* </Router> */}
            </CartProvider>
        </div>
    )
}
export default Home


