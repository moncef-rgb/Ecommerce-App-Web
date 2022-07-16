import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArticleService from '../../Services/Article-Service';
import { useCart } from 'react-use-cart';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbarre from '../Navbarre';

const ListarticlesCard = () => {
  const { addItem, totalItems = 0 } = useCart();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    GetListArticles();

  });

  const GetListArticles = async () => {

    await ArticleService.fetchArticles()
      .then((res) => {
        setArticles(res.data);

      });
  }
  return (
    <div className="container">

      <Navbarre />

      <AppBar position="static" color='primary'>
        <Toolbar>
          <Button color="inherit"><Link to="/cart"
            style={{
              "color": "white", "textDecoration": "none",
              borderRadius: '50%', fontSize: 26
            }}>
            {totalItems}<ShoppingCartIcon sx={{ fontSize: 40 }} /></Link>
          </Button>
        </Toolbar>
      </AppBar>

      <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center" }}>
        {articles.map((art, ind) => {
          return <Card sx={{ maxWidth: 'auto', margin: 1 }}>

            <CardMedia
              component="img"
              alt="green iguana"
              height="180"
              image={art.imageartpetitf}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {art.reference}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Prix : {art.prixVente} DT
              </Typography>
            </CardContent>

            <CardActions>
              <Button disabled={art.qtestock <= 1}
                variant="contained" color="secondary" size="large"
                onClick={() => {
                  const target = { price: art.prixVente, id: art._id };
                  const returnedTarget = Object.assign(target, art);
                  addItem(returnedTarget)
                }}
              >
                {art.qtestock <= 1 ? "OUT OF SOLD" : "Ajouter au panier"}
              </Button>
            </CardActions>

          </Card>
        })}</div>
    </div>
  )
}

export default ListarticlesCard
