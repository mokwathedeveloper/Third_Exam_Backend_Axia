
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());

const { userRouter, productRouter, authRouter, cartRouter } = require('./routes');

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/auth', authRouter);
app.use('/cart', cartRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
