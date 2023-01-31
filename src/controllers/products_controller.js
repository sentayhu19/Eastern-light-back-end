const db = require("../db");

exports.deleteproduct = async (req, res) => {
    const { id } = req.body;
    try {
      const { rows } = await db.query(
        "DELETE FROM products WHERE id = $1",
        [id]
      );
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
    const { id, name, price, description, category_id, priority } = req.body;
    try {
      const { rows } = await db.query(
        "UPDATE products SET name = $1, price = $2, description = $3, category_id = $4, priority = $5 WHERE id = $6",
        [name, price, description, category_id, priority, id]
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
  }