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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
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
    if (isToast) {
      toast("Product added!");
    }
  }, [isToast]);

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#fff", width: "100%" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
      >
        Popular <br />
        Most ordered right now.
      </Typography>

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
                <Box className="d-flex align-items-center p-2">
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
                    image={product.strMealThumb}
                    alt={product.strMeal}
                    style={{ borderRadius: "5px", marginLeft: "10px" }}


                    sx={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: 2,
                      marginTop: 2,
                    }}
                  />
                  <Box className="d-flex justify-content-between p-2">
                    <Tooltip title="Favorite" placement="top">
                      <FavoriteBorderIcon />
                    </Tooltip>
                    <Tooltip title="Add to cart" placement="top">
                      <AddShoppingCartIcon
                        className="mt-4"
                        onClick={() => dispatch(addProduct(product))}
                        style={{ cursor: "pointer" }}
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







