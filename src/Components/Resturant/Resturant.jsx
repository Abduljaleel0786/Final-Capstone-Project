import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import heroImage from "../../Images/hero-img.webp";
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Divider, Tooltip, } from "@mui/material";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoIcon from '@mui/icons-material/Info';
const Restaurant = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
                setProducts(response.data.meals);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

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
                                    <Typography variant="h6" component="div">
                                        {product.strMeal}
                                    </Typography>

                                </CardContent>
                                <Divider className="mt-2 mb-2 " />

                                <Box  className=' d-flex justify-content-between p-3'>


                                    <Tooltip title="Details" placement="top">

                                    <InfoIcon />

                                    </Tooltip>

                                    <Tooltip title="Favourate" placement="top">

                                    <FavoriteBorderIcon />

                                    </Tooltip>

                                    <Tooltip title="Add to cart" placement="top">

                                    <AddShoppingCartIcon />

                                    </Tooltip>
                                  
                                  
                                   
                                </Box>



                            </Card>
                        </Grid>
                    ))}
                </Grid>
                
            </Container>
        </Box>
    );
};

export default Restaurant;
