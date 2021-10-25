let router = require('express').Router();

let testRouter = require('./api/test.js');
let productoRouter = require('./api/productos')

router.use('/test', testRouter);
router.use('/productos', productoRouter)


module.exports = router;
