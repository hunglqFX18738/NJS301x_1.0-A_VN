const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );
  product.save();
  //không có thì sẽ bị lỗi lặp data
  res.redirect('/');
};
