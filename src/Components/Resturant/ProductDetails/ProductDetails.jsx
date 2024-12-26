import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Tooltip,
  CircularProgress,
  Breadcrumbs,
  Link,
  Dialog,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Slices/productSlice";
import { addFavorite } from "../../Slices/FavSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from '@mui/icons-material/Close';

const ProductDetails = () => {
  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isToast } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        if (response.data.meals) {
          setProducts(response.data.meals);
          setLoading(false);
        } else {
          setError("No products found.");
          setLoading(false);
        }
      } catch (err) {
        setError("Error fetching products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (isToast) {
      toast('Product added');
    }
  }, [isToast]);

  const handleOpenDeliveryModal = () => setOpenDeliveryModal(true);
  const handleCloseDeliveryModal = () => setOpenDeliveryModal(false);

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#fff", width: "100%" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit">Homepage</Link>
        <Link underline="hover" color="inherit" ></Link>
      </Breadcrumbs>

      <Container sx={{ marginTop: "40px" }}>
  

        <ToastContainer />

        {isLoading ? (
          <Box className="text-center mt-5">
            <CircularProgress color="inherit" />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">
            {error}
          </Typography>
        ) : (

          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={6} key={product.idMeal}>
                <Card>
                  <Box className='d-flex align-items-center p-2'>
                    <CardContent>
                      <Tooltip title={product.strMeal} placement="top">
                        <Typography variant="h6" component="div">
                          {product.strMeal.length > 15
                            ? `${product.strMeal.slice(0, 15)}...`
                            : product.strMeal}
                        </Typography>
                      </Tooltip>
                    </CardContent>
                    <CardMedia
                      component="img"
                      height="90"
                      width="AUTO"
                      image={product.strMealThumb}
                      alt={product.strMeal}
                      style={{ borderRadius: '5px', marginLeft: '10px' }}
                    />
                    <Box className="justify-content-between p-2">
                      <Tooltip title="Favorite" placement="top">
                        <FavoriteBorderIcon onClick={() => dispatch(addFavorite(product))} />
                      </Tooltip>
                      <Tooltip title="Add to cart" placement="top">
                        <AddShoppingCartIcon className="mt-4" onClick={() => dispatch(addProduct(product))} />
                      </Tooltip>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      <Dialog open={openDeliveryModal} onClose={handleCloseDeliveryModal}>
        <Box p={2}>
          <Typography variant="h4">Delivery Details</Typography>
          <Button onClick={handleCloseDeliveryModal} startIcon={<CloseIcon />}>Close</Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ProductDetails;
