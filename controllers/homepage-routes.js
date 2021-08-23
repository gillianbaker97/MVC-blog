const router = require('express').Router();
const { Blogs, Posts } = require('../models');

// get all the blogs for the homepage

router.get('/', async (req, res) => {
    try {
        const blogPostData = await Blogs.findAll ({
            include: [{

                model: Posts,
                attributes: ['filename', 'description'],
            },
            ],
        });

        const blogs = blogPostData.map((post) => 
            post.get({ plain: true })
        );
        res.render('homepage', {
            blogs,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json.get(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });
  
  module.exports = router;
  

  