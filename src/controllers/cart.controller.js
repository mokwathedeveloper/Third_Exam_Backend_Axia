
const carts = [];

const addToCart = (req, res) => {
    const cart = {
        productId: req.body.productId,
        quantity: req.body.quantity,
        userId: req.user.id
    };
    carts.push(cart);
    res.status(201).json(cart);
};

module.exports = {
    addToCart
};