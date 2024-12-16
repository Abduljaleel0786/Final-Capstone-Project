import React, { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Restaurant = () => {
  const [categories, setCategories] = useState([]);
  const [allFoods, setAllFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (response.status === 200) {
          setCategories(response.data.categories);
        } else {
          toast.error('Failed to fetch categories!');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('An error occurred while fetching categories!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch food items based on selected category
  useEffect(() => {
    const fetchFoodsByCategory = async () => {
      if (!selectedCategory) return;
      setIsLoading(true);
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
        if (response.status === 200) {
          setAllFoods(response.data.meals);
          setFilteredFoods(response.data.meals);
        } else {
          toast.error('Failed to fetch food items!');
        }
      } catch (error) {
        console.error('Error fetching food items:', error);
        toast.error('An error occurred while fetching food items!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFoodsByCategory();
  }, [selectedCategory]);

  // Handle search
  const searchHandler = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredFoods(
      allFoods.filter((food) =>
        food.strMeal.toLowerCase().includes(value)
      )
    );
  };

  return (
    <>
      <ToastContainer />

      {/* Search Bar */}
      <Box className="container d-flex justify-content-center mt-3">
        <TextField
          size="small"
          placeholder="Search Foods..."
          onChange={searchHandler}
          value={searchTerm}
          sx={{ width: '100%', maxWidth: '500px' }}
        />
      </Box>

      {/* Categories */}
      <Box className="container d-flex justify-content-center mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.strCategory} className="col">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setSelectedCategory(category.strCategory)}
                  fullWidth
                >
                  {category.strCategory}
                </Button>
              </div>
            ))
          ) : (
            <Typography variant="h6" className="text-center">
              No categories found!
            </Typography>
          )}
        </div>
      </Box>

      {/* Food List */}
      {isLoading ? (
        <Box className="text-center mt-5">
          <CircularProgress size="3rem" />
        </Box>
      ) : (
        <Box className="container mt-4 mb-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {filteredFoods && filteredFoods.length > 0 ? (
              filteredFoods.map((food) => (
                <div key={food.idMeal} className="col">
                  <Box className="card shadow-sm p-3 rounded">
                    <img
                      src={food.strMealThumb}
                      alt={food.strMeal}
                      className="card-img-top img-fluid rounded"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Typography
                      variant="h6"
                      className="card-title mt-2 text-truncate"
                      sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                    >
                      {food.strMeal}
                    </Typography>
                  </Box>
                </div>
              ))
            ) : (
              <Typography variant="h6" className="text-center">
                No food items found!
              </Typography>
            )}
          </div>
        </Box>
      )}
    </>
  );
};

export default Restaurant;
