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
  const { id, name, price, description, category_id, priority, unit_id, box, image } =
    req.body;
  try {
    const { rows } = await db.query(
      "UPDATE products SET name = $1, price = $2, description = $3, category_id = $4, priority = $5, unit_id = $6, box = $7, image = $8 WHERE id = $9",
      [name, price, description, category_id, priority, unit_id, box, image, id]
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
    unit_id,
    box,
  } = req.body;
  try {
    await db.query(
      "insert into products (name, description, brand, price, image, priority, category_id, unit_id, box) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      [name, description, brand, price, image, priority, category_id, unit_id, box]
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

exports.addunit = async (req, res) => {
  const { name } = req.body;
  try {
    await db.query("insert into unit (name) values ($1)", [name]);
    return res.status(201).json({
      success: true,
      message: "Unit created successfully",
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

exports.getunit = async (req, res) => {
  try {
    const { rows } = await db.query("select * from unit");
    return res.status(200).json({
      success: true,
      units: rows,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
}
