import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import ArticleService from '../../Services/Article-Service';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Navbarre from '../../Component/Navbarre';
//import ListRoutes from './Routes/ListRoutes';


//import { ToastContainer } from 'react-toastify'
//import CarouselHome from './Component/CarouselHome'
//import ListRoutes from './Routes/ListRoutes'
//import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './App.css';
//import { CartProvider, useCart } from 'react-use-cart';
//import SignIn from './Component/SignIn';


const ListarticlesDatatables = () => {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        GetListArticles();
        console.log(articles)
    }, []);

    const GetListArticles = async () => {
        await ArticleService.fetchArticles()
            .then((res) => {
                setArticles(res.data);
            });
    }
    const delArticle = async (_id) => {
        await ArticleService.deleteArticle(_id)
        var newarticles = articles.filter((item) => {
            console.log(item)
            return item._id !== _id
        })
        setArticles(newarticles);
    }

    const columns = [
        {
            name: "reference",
            label: "Reference",
            options: {
                filter: true,
                sort: false,
            }


        },
        {
            name: "designation",
            label: "Designation",
            options: {
                filter: true,
                sort: false,
            }

        },
        {
            name: "marque",
            label: "Marque",
            options: {
                filter: true,
                sort: false,
            }

        },
        {
            name: "qtestock",
            label: "Qte en stock",
            options: {
                filter: true,
                sort: false,
            }

        },
        {
            name: "prixVente",
            label: "Prix de vente",
            options: {
                filter: true,
                sort: false,
            }

        },
        {
            name: "imageartpetitf",
            label: "Image",
            options: {
                customBodyRender: (rowData) => (
                    <img
                        style={{ height: 60, borderRadius: '50%' }}
                        src={rowData}
                        alt=""
                    />
                ),
                filter: true,
                sort: false,
            },
        },
        {
            name: "categorieID",
            label: "Categorie",
            options: {
                customBodyRender: (categ) => (
                    categ ? categ.nomcategorie : null
                ),
                filter: true,
                sort: false,
            }
        },
        {
            name: "scategorieID",
            label: "S-Categorie",
            options: {
                customBodyRender: (scateg) => (
                    scateg ? scateg.nomscategorie : null
                ),
                filter: true,
                sort: false,
            }
        },
        {
            name: "_id",
            label: "Actions",
            options: {
                customBodyRender: (value) => (
                    <div>
                        <IconButton>
                            {<Link to={"/Articles/edit/" + value}>
                                <EditIcon color='secondary' />
                            </Link>
                            }
                        </IconButton>

                        <IconButton onClick={() => delArticle(value)}>
                            <DeleteIcon sx={{ color: pink[500] }} />
                        </IconButton>
                    </div>
                    //scateg? scateg.nomscategorie:null
                ),
                filter: true,
                sort: false,
            }
        },
    ];

    //    const data = [
    //     { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    //     { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    //     { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    //     { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    //    ];

    //    const options = {
    //    filterType: 'checkbox',
    //   };

    return (
        <div>

            <Navbarre />

            <div style={{ padding: 5, margin: 5 }}>
                <Button color="success" startIcon={<AddCircleOutlineIcon />} variant="contained" >
                    {<Link to={"/Articles/add"} style={{ textDecoration: "none", color: "white" }}>
                        Ajouter un article
                    </Link>}
                </Button>
            </div>

            {articles.length > 0 ?
                <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                        title={"List Articles data tables"}
                        data={articles}
                        columns={columns}
                    //options={options}
                    />
                </ThemeProvider>
                : null
            }

        </div>
    )
}

export default ListarticlesDatatables
