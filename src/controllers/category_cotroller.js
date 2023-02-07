const db = require("../db");
// CATEGORIES ***********************************************************************************************
exports.addnewcategory = async (req, res) => {
  const { name } = req.body;
  try {
    await db.query("insert into category (name) values ($1)", [name]);
    return res.status(201).json({
      success: true,
      message: "Category created successfully",
    });
  } catch (err) {
    console.log("ERROR: ", err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const { rows } = await db.query("select * from category");
    return res.status(200).json({
      success: true,
      category: rows,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      message: "unable to get category",
    });
  }
};

exports.getsearchbycat = async (req, res) => {
  const { category_id } = req.body;
  try {
    const { rows } = await db.query(
      "SELECT * FROM products WHERE category_id = $1",
      [category_id]
    );
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
