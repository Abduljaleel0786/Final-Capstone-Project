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

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [favoriteModalOpen, setFavoriteModalOpen] = useState(false);
  const [favoriteProduct, setFavoriteProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartToastMessage } = useSelector((state) => state.products);
  const { favoriteToastMessage } = useSelector((state) => state.favorite);

  // Fetch products on component mount
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

  // Show toast messages for cart and favorite actions
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

  // Handle adding to the cart
  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);

    // Pre-fill email with the one stored in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email) {
      setEmail(storedUser.email); // Set the email to the state
    }
  };

  // Handle email submit
  const handleEmailSubmit = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("Please sign up or log in first.");
      setModalOpen(false);
      setLoginModalOpen(true);
      return;
    }

    if (email !== storedUser.email) {
      toast.error("Enter the same email used during login.");
      return;
    }

    dispatch(addProduct(selectedProduct));
    toast.success("Product added to cart successfully!");
    setModalOpen(false);
    setEmail(""); // Reset email input field after submission
  };

  // Handle favorite product
  const handleAddToFavorite = (product) => {
    setFavoriteProduct(product);
    setFavoriteModalOpen(true);
  };

  // Handle favorite confirmation
  const handleFavoriteConfirmation = () => {
    dispatch(addFavorite(favoriteProduct));
    toast.success("Product added to favorites successfully!");
    setFavoriteModalOpen(false);
  };

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
                  backgroundColor: "#f9f9f9", // Added light background for card
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={product.strMealThumb}
                  alt={product.strMeal}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "16px",
                    position: "relative",
                    backgroundColor: "#ffffff",
                    height: "auto",
                    color: "#333",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                      fontWeight: "bold",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textAlign: "center",
                    }}
                  >
                    {product.strMeal}
                  </Typography>
                  {/* Display fixed price */}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      mt: 1,
                      color: "#FF4081", // Pink color
                    }}
                  >
                    ₹450
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 2,
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Tooltip title="Favorite" placement="top">
                      <IconButton onClick={() => handleAddToFavorite(product)} sx={{ cursor: "pointer" }}>
                        <FavoriteBorderIcon sx={{ color: "#FF4081" }} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Add to cart" placement="top">
                      <IconButton onClick={() => handleAddToCart(product)} sx={{ cursor: "pointer" }}>
                        <AddShoppingCartIcon sx={{ color: "#FF4081" }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modal for Favorite Confirmation */}
      <Modal open={favoriteModalOpen} onClose={() => setFavoriteModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <IconButton onClick={() => setFavoriteModalOpen(false)} sx={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
            Are you sure you want to add this item to your favorites?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#FF4081" }}
            onClick={handleFavoriteConfirmation}
          >
            Yes, Add to Favorites
          </Button>
        </Box>
      </Modal>

      {/* Add to Cart Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <IconButton onClick={() => setModalOpen(false)} sx={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
            To add this item to your cart, please enter your email:
          </Typography>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, backgroundColor: "#FF4081" }}
            onClick={handleEmailSubmit}
          >
            Add to Cart
          </Button>
        </Box>
      </Modal>

      <LoginModal open={loginModalOpen} handleClose={() => setLoginModalOpen(false)} />
    </Box>
  );
};

export default Product;





