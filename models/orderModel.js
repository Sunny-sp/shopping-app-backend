import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems:[
        {   name:{
                type: String,
                required: true
            },
            qty:{
                type: Number,
                required: true
            },
            image:{
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            product:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],
    shippingAddress:{
        address:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true
        },
    },
    charges:{
        tax:{
            type: Number
        },
        shippingCharges:{
            type: Number
        },
        itemPrice:{
            type: Number
        },
        totalPrice:{
            type: Number,
            require: true
        }
    },
    paymnt:{
        type: String,
        required: true
    },
    paymntStatus:{
        id:{
            type: String
        },
        status:{
            type: String
        },
        email:{
            type: String
        }
    },
    shippingStatus:{
        isDispatched:{
            type: Boolean
        },
        dispatchedAt:{
            type: String
        },
        isShipped:{
            type: Boolean
        },
        shippedAt:{
            type: String
        }
    }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
