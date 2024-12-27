import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../Slices/productSlice";
import { addFavorite } from "../../../Slices/favouriteSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartToastMessage } = useSelector((state) => state.products);
  const { favoriteToastMessage } = useSelector((state) => state.favorite);

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
        } else {
          setError("No products found.");
        }
      } catch (err) {
        setError("Error fetching products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (cartToastMessage) {
      toast.success(cartToastMessage);
    }
  }, [cartToastMessage]);

  useEffect(() => {
    if (favoriteToastMessage) {
      toast.success(favoriteToastMessage);
    }
  }, [favoriteToastMessage]);

  return (
    <Box sx={{ padding: { xs: "10px", sm: "20px" }, backgroundColor: "#fff", width: "100%" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem" } }}
      >
        Popular <br />
        Most ordered right now.
      </Typography>

      <ToastContainer />

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress color="inherit" />
        </Box>
      ) : error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.idMeal}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
                  <CardContent>
                    <Tooltip title={product.strMeal} placement="top">
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          textAlign: "center",
                          fontSize: { xs: "1rem", sm: "1.25rem" },
                        }}
                      >
                        {product.strMeal.length > 20
                          ? `${product.strMeal.slice(0, 20)}...`
                          : product.strMeal}
                      </Typography>
                    </Tooltip>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="150"
                    image={product.strMealThumb}
                    alt={product.strMeal}
                    sx={{
                      borderRadius: 2,
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      marginTop: 2,
                    }}
                  />
                  <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", p: 2 }}>
                    <Tooltip title="Favorite" placement="top">
                      <FavoriteBorderIcon
                        onClick={() => dispatch(addFavorite(product))}
                        sx={{ cursor: "pointer" }}
                      />
                    </Tooltip>
                    <Tooltip title="Add to cart" placement="top">
                      <AddShoppingCartIcon
                        onClick={() => dispatch(addProduct(product))}
                        sx={{ cursor: "pointer" }}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Product;
