const express = require('express');
const router = express.Router();
const comparisonRoutes = require('./comparisonRoutes');

router.use(comparisonRoutes);

module.exports = router;