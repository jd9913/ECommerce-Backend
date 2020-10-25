const router = require('express').Router();
const { Category, Product } = require('../../models');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);


//create the associations

Category.hasMany(Product, {
    foreignKey: 'category_id'
});


Product.belongsTo(Category, {
    foreignKey: 'category_id',
});





module.exports = router;
