import React, { useState } from "react";
import heroImage from "../../Images/hero-img.webp";
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Divider,
    Modal,
    Button
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import Resturant1 from '../../Images/Resturant 01.webp';
import Resturant2 from '../../Images/Resturant 02.webp';
import Resturant3 from '../../Images/resturant 03.webp';
import Resturant4 from '../../Images/Resturant 04.webp';
import Resturant5 from '../../Images/Resturant 05.webp';
import Resturant6 from '../../Images/Resturant 06.webp';
import Resturant7 from '../../Images/Restuant 07.webp';
import Resturant8 from '../../Images/Resturant 08.webp';
import Resturant9 from '../../Images/Resturant 09.webp';
import Resturant10 from '../../Images/Resturant 10.webp';


const Restaurant = () => {

    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleClose = () => setOpenModal(false);

    // Dummy data for restaurants
    const products = [
        {
            id: 'SpiceDelight',
            name: 'Spice Delight',
            image: Resturant1,
            rating: "4.5",
            type: "Indian Cuisine"
        },
        {
            id: 'BurgerPoint',
            name: 'Burger Point',
            image: Resturant2,
            rating: "4.2",
            type: "Burgers"
        },
        {
            id: 'PastaParadise',
            name: 'Pasta Paradise',
            image: Resturant3,
            rating: "4.3",
            type: "Italian",
            isClosed: true
        },
        {
            id: 'SushiHouse',
            name: 'Sushi House',
            image: Resturant4,
            rating: "4.8",
            type: "Japanese",
            isClosed: true
        },
        {
            id: 'GrillMaster',
            name: 'Grill Master',
            image: Resturant5,
            rating: "4.7",
            type: "BBQ"
        },
        {
            id: 'VeganBites',
            name: 'Vegan Bites',
            image: Resturant6,
            rating: "4.6",
            type: "Vegan"
        },
        {
            id: 'SweetTreats',
            name: 'Sweet Treats',
            image: Resturant7,
            rating: "4.3",
            type: "Desserts",
            isClosed: true
        },
        {
            id: 'TacoFiesta',
            name: 'Taco Fiesta',
            image: Resturant8,
            rating: "4.4",
            type: "Mexican",
            isClosed: true
        },
        {
            id: 'PizzaWorld',
            name: 'Pizza World',
            image: Resturant9,
            rating: "4.5",
            type: "Pizza"
        },
        {
            id: 'SeafoodBay',
            name: 'Seafood Bay',
            image: Resturant10,
            rating: "4.6",
            type: "Seafood"
        }
    ];

    const handleCardClick = (product) => {
        if (product.isClosed) {
            setSelectedRestaurant(product.name);
            setOpenModal(true);
        } else {
            navigate(`/ProductDetails/${product.id}`);
        }
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f8f9fa",
                    padding: "60px 20px",
                    minHeight: "300px",
                    position: "relative",
                    flexDirection: "column",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: { xs: "100%", sm: "50%" },
                        height: "100%",
                        backgroundImage: `url(${heroImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                        zIndex: 0,
                    }}
                />
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
                            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                        }}
                    >
                        Food and groceries delivery from <br />
                        Lahore's best restaurants and shops
                    </Typography>
                </Container>
            </Box>

            {/* Restaurant Cards */}
            <Container sx={{ marginTop: "40px" }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        marginBottom: "20px",
                        fontWeight: "bold",
                        color: "#333",
                        fontSize: { xs: "28px", sm: "34px", md: "40px" },
                    }}
                >
                   All Restaurants
                </Typography>

                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                            <Card
                                sx={{ transition: "0.3s", boxShadow: 3, borderRadius: "12px", overflow: "hidden", '&:hover': { boxShadow: 6, transform: "scale(1.05)", cursor: "pointer" }, opacity: product.isClosed ? 0.5 : 1, position: 'relative' }}
                                onClick={() => handleCardClick(product)}
                            >
                                <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                                {product.isClosed && (
                                    <Typography variant="h6" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bolder', background: '#fff', color :'#e21b70',  padding: '5px 10px', borderRadius: '4px' }}>Closed</Typography>
                                )}
                                <CardContent sx={{ padding: "16px", textAlign: "center" }}>
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography>Rating: {product.rating}/5 ✨</Typography>
                                    <Typography>{product.type}</Typography>
                                </CardContent>
                                <Divider />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Modal */}
            <Modal open={openModal} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" component="h2">{selectedRestaurant} is Closed</Typography>
                    <Button onClick={handleClose} sx={{ marginTop: 2 }}>Close</Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default Restaurant;