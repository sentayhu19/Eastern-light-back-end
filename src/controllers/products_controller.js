const db = require("../db");

exports.deleteproduct = async (req, res) => {
    const { id } = req.body;
    console.log("ID: ", id)
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
      console.log("Error: ", err);
    }
  };