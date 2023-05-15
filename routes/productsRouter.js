import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/productModel.js';
import bodyParser from 'body-parser';
const productRouter = express.Router();
productRouter.use(bodyParser.json());

productRouter.route('/')
.get((req, res, next) => {
    Product.find(req.query)
    .then(products => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(products);
    })
    .catch(error => next(error));
})
.post((req, res, next)=> {
    Product.create(req.body)
    .then(products => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(products);
    })
    .catch(error => next(error));
})

productRouter.route('/:productId')
.get((req, res, next) => {
    Product.findById(req.params.productId)
    .then(product => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(product);
    })
    .catch(error => next(error));
})

export default productRouter;
