import axios from "axios";
import heroImage from "../../Images/hero-img.webp";
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Divider, Tooltip, CircularProgress,} from "@mui/material";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Slices/addCartSlice";
import { addProduct } from "../Slices/productSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Restaurant = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {isToast} =useSelector((state)=> state.products)
    console.log(isToast);
    

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


    useEffect(()=>{

        if(isToast)  {

            toast('product added')
        }
          
    },[isToast])

   
        

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f8f9fa",
                    padding: "50px 20px",
                    minHeight: "300px",
                    position: "relative",
                    flexDirection: "column",
                }}
            >
                {/* Background Image */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: { xs: "100%", sm: "40%" },
                        height: "100%",
                        backgroundImage: `url(${heroImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                        zIndex: 0,
                    }}
                />
                {/* Text Section */}
                <Container
                    sx={{
                        zIndex: 1,
                        position: "relative",
                        color: "black",
                        textAlign: { xs: "center", md: "left" },
                        maxWidth: "600px",
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "24px", sm: "32px", md: "50px" },
                            lineHeight: 1.2,
                        }}
                    >
                        Food and groceries delivery from <br />
                        Lahore's best restaurants and shops
                    </Typography>
                </Container>
            </Box>

            {/* Products Section */}
            <Container sx={{ marginTop: "40px" }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ marginBottom: "20px", fontWeight: "bold" }}
                >
                    Restaurants
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

                        <Grid item xs={12} sm={6} md={4} key={product.idMeal}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.strMealThumb}
                                    alt={product.strMeal}
                                />

                                <CardContent>

                                    <Tooltip title={product.strMeal} placement="top">

                                        <Typography variant="h6" component="div">
                                            {product.strMeal.length > 10
                                                ? `${product.strMeal.slice(0, 10)}...`
                                                : product.strMeal}
                                        </Typography>
                                    </Tooltip>

                                </CardContent>



                                <Divider className="mt-2 mb-2" />
                                <Box className="d-flex justify-content-between p-3">
                                    <Tooltip title="Details" placement="top">
                                        <InfoIcon onClick={() =>navigate(`/details/${product.idMeal}`)} />
                                    </Tooltip>
                                    <Tooltip title="Favorite" placement="top">
                                        <FavoriteBorderIcon />
                                    </Tooltip>
                                    <Tooltip title="Add to cart" placement="top">
                                        <AddShoppingCartIcon onClick={() => dispatch(addProduct(product))} />
                                    </Tooltip>
                                </Box>
                            </Card>
                        </Grid>

                    ))}
                </Grid>
            )}
        </Container>
        </Box >
    );
};

export default Restaurant;
