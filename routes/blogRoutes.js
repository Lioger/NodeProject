const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();


router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post);

router.get('/create', blogController.blog_create_get);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

router.use('/404', (req, res) => {
    res.status(404).render('404', {
        title: '404',
    });
});


module.exports = router;