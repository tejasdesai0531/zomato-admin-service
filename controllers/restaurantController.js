// controllers/restaurantController.js
const Restaurant = require('../models/restaurant');

exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ msg: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.createRestaurant = async (req, res) => {
    console.log("req.bdoy>>>>>>>>>>",req.body);
    try {
        const newRestaurant = new Restaurant(req.body);
        const restaurant = await newRestaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.updateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!restaurant) {
            return res.status(404).json({ msg: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ msg: 'Restaurant not found' });
        }
        res.json({ msg: 'Restaurant removed' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
