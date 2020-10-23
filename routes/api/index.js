const router = require('express').Router();
const { Category, Product } = require('../../models');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');


//create the associations

Category.hasMany(Product, {
    foreignKey: 'category_id'
});


Product.belongsTo(Category, {
    foreignKey: 'category_id',
});





module.exports = router;
