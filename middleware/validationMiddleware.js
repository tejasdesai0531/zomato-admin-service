// middleware/validationMiddleware.js
const { check, validationResult } = require('express-validator');

exports.restaurantValidationRules = () => {
    return [
        check('name').notEmpty().withMessage('Name is required'),
        check('address').notEmpty().withMessage('Address is required'),
        check('cuisine').notEmpty().withMessage('Cuisine is required'),
        check('rating')
            .isFloat({ min: 0, max: 5 })
            .withMessage('Rating must be between 0 and 5')
    ];
};

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
