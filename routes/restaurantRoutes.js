// routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const { restaurantValidationRules, validate } = require('../middleware/validationMiddleware');
const {
    getRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
} = require('../controllers/restaurantController');

router.get('/', getRestaurants);
router.get('/:id', getRestaurantById);
router.post('/', restaurantValidationRules(), validate, createRestaurant);
router.put('/:id', restaurantValidationRules(), validate, updateRestaurant);
router.delete('/:id', deleteRestaurant);

module.exports = router;
