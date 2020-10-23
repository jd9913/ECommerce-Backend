const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

router.use('/categories', category-routes);
router.use('/products', product-routes);
router.use('/tags', tag-routes);

module.exports = router;