const express = require('express');
const router = express.Router();
const homeController = require ('../controllers/home_controller');

console.log('router loaded');


//for displaying the content
router.get('/', homeController.home);

// for creating tasks
router.post('/create-task', homeController.create_task);

//for deleting the contact
router.get('/delete-contact/', homeController.delete_task);



// for any further routes, access from here
// router.use('/routerName', require('./routerfile'));

module.exports = router;