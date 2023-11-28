const router = require('express').Router();
const apiRoutes = require('./api')

router.use('/api', apiRoutes);

router.use((req, res) => res.send("This route doesn't lead anywhere!"))

module.exports = router