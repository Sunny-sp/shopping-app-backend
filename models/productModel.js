import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    comment:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
},{timestamp: true});

const productSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    reviews:[reviewSchema],
    numReviews:{
        type: Number,
        required: true
    },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
