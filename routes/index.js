const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');


//API Routes
router.use('/api', apiRoutes);

//if no api route then send the react app
router.use((req, res)=> {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;