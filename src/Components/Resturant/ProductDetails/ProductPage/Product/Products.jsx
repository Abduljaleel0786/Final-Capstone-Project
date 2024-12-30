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
  Modal,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../Slices/productSlice";
import { addFavorite } from "../../../../Slices/favouriteSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginModal from "../../../LoginModal/LoginModal";
import { useForm } from "react-hook-form";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [favoriteModalOpen, setFavoriteModalOpen] = useState(false);
  const [favoriteProduct, setFavoriteProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
      }
      setLoading(false);
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

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
    reset();
  };

  const handleAddToFavorite = (product) => {
    setFavoriteProduct(product);
    setFavoriteModalOpen(true);
  };

  const handleFavoriteConfirmation = () => {
    dispatch(addFavorite(favoriteProduct));
    toast.success("Product added to favorites successfully!");
    setFavoriteModalOpen(false);
  };

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || data.email !== storedUser.email) {
      toast.error("Please sign up or log in first or enter correct email.");
      setModalOpen(false);
      setLoginModalOpen(true);
      return;
    }

    dispatch(addProduct(selectedProduct));
    toast.success("Product added to cart successfully!");
    setModalOpen(false);
    reset();
  };

  return (
    <Box sx={{ padding: { xs: "10px", sm: "20px" }, backgroundColor: "#fff", width: "100%" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem" },
          color: "#FF4081",
        }}
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
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 5,
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "480px",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  backgroundColor: "#f9f9f9",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={product.strMealThumb}
                  alt={product.strMeal}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {product.strMeal}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ₹450
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Tooltip title="Favorite">
                      <IconButton onClick={() => handleAddToFavorite(product)}>
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Add to cart">
                      <IconButton onClick={() => handleAddToCart(product)}>
                        <AddShoppingCartIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

   

<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      p: 4,
      backgroundColor: "white",
    }}
  >
    <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Fill this form for product added</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        fullWidth
        label="Name"
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
        sx={{ marginBottom: "16px" }}  
      />
      <TextField
        fullWidth
        label="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            message: "Invalid email address",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        sx={{ marginBottom: "16px" }}  
      />
      <TextField
        fullWidth
        label="Phone"
        {...register("phone", { required: "Phone number is required" })}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        sx={{ marginBottom: "16px" }}  
      />
      <TextField
        fullWidth
        label="Address"
        {...register("address", { required: "Address is required" })}
        error={!!errors.address}
        helperText={errors.address?.message}
        sx={{ marginBottom: "16px" }}
      />
      <TextField
        fullWidth
        label="City"
        {...register("city", { required: "City is required" })}
        error={!!errors.city}
        helperText={errors.city?.message}
        sx={{ marginBottom: "16px" }}  
      />
      <TextField
        fullWidth
        label="Province"
        {...register("province", { required: "Province is required" })}
        error={!!errors.province}
        helperText={errors.province?.message}
        sx={{ marginBottom: "16px" }}  
      />
      <Button
        type="submit"
        style={{
          backgroundColor: "#ec008c",
          color: "white",
          marginTop: "16px",
          width: "100%",
        }}
      >
        Add to Cart
      </Button>
    </form>
  </Box>
</Modal>


      {/* Favorite Modal */}
      <Modal open={favoriteModalOpen} onClose={() => setFavoriteModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            p: 4,
            backgroundColor: "white",
            borderRadius: "16px",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10 }}
            onClick={() => setFavoriteModalOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "16px", color: "#FF4081" }}>
            Are you sure you want to add this product to your favorites?
          </Typography>
          <Button
            onClick={handleFavoriteConfirmation}
            sx={{
              backgroundColor: "#ec008c",
              color: "white",
              width: "100%",
              marginTop: "16px",
              padding: "10px 0",
            }}
          >
            Yes, Add to Favorites
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Product;
