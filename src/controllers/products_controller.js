const db = require("../db");

//PRODUCTS ***********************************************************************************************
exports.deleteproduct = async (req, res) => {
  const { id } = req.body;
  try {
    const { rows } = await db.query("DELETE FROM products WHERE id = $1", [id]);
    return res.status(200).json({
      sucess: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

//edit product
exports.editproduct = async (req, res) => {
  const { id, name, price, description, category_id, priority, unit, box } =
    req.body;
  try {
    const { rows } = await db.query(
      "UPDATE products SET name = $1, price = $2, description = $3, category_id = $4, priority = $5, unit = $6, box = $7 WHERE id = $8",
      [name, price, description, category_id, priority, unit, box, id]
    );
    return res.status(200).json({
      sucess: true,
      message: "Product edited successfully",
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

exports.getproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const { rows } = await db.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    return res.status(200).json({
      sucess: true,
      product: rows,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

exports.getproductshow = async (req, res) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM products ORDER BY priority ASC"
    );
    return res.status(200).json({
      success: true,
      products: rows,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: "unable to get product",
    });
  }
};

exports.addnewproduct = async (req, res) => {
  const {
    name,
    description,
    brand,
    price,
    image,
    priority,
    category_id,
    unit,
    box,
  } = req.body;
  try {
    await db.query(
      "insert into products (name, description, brand, price, image, priority, category_id, unit, box) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      [name, description, brand, price, image, priority, category_id, unit, box]
    );
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { rows } = await db.query("select * from products");
    return res.status(200).json({
      success: true,
      products: rows,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};
