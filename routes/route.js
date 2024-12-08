const userController=require('../controllers/userController')
const postController=require('../controllers/postController')
const wishController=require('../controllers/wishController')
const cartController=require('../controllers/cartController')
const jwt=require('../middlewares/jwtMiddleware')
const express=require('express')

const routes=express.Router()

// user
routes.post('/reg',userController.addUser)
routes.post('/log',userController.userLogin)

// post
routes.get('/allposts',postController.getAllPost)
routes.get('/oneproduct/:id',postController.getSpecificOne)

// wish
routes.post('/addwish',jwt,wishController.addToWishlist)
routes.get('/wishitems',jwt,wishController.getWishlistItems)
routes.delete('/removewish/:id',jwt,wishController.removeFromWishlist)

// cart
routes.post('/addcart',jwt,cartController.addToCart)
routes.get('/cartlist',jwt,cartController.getCart)
routes.delete('/delcart/:id',jwt,cartController.removeCart)
routes.get('/increcart/:id',jwt,cartController.increaseQuantity)
routes.get('/decrecart/:id',jwt,cartController.decreseaQuantity)


module.exports=routes