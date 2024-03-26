const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const orderRoutes = require('./Routes/order.routes');
const userRoutes = require('./Routes/user.routes');
const productRoutes = require('./Routes/product.routes');
const commentRoutes = require('./Routes/comment.routes');
const ApiError = require("./utils/ApiError");

const app = express();


// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors(
    {
        origin: ["https://dashboard-nva9.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.options("*", cors());




// Reroute all API request starting with "/v1" route
// Routes
app.use('/carts', orderRoutes);
app.use('/carts/:id', orderRoutes);
app.use('/users', userRoutes);
app.use('/users', userRoutes);
app.use('/users/:id', userRoutes);
app.use('/users/:id', userRoutes);
app.use('/products', productRoutes);
app.use('/comments', commentRoutes);




module.exports = app;