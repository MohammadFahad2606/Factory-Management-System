import Product from "../models/Product.js";

export const getProducts = async (req, res, next) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const { name, articleNo, imageUrl } = req.body;
    // Create a new product with provided data
    const product = await Product.create({ name, articleNo, imageUrl });
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};
