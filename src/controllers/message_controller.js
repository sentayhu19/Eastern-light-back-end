const db = require("../db");
exports.addmessage = async (req, res) => {
    const {name, email,phone} = req.body;
    const message = req.body.sendmessage;
    try {
        console.log("GO INFORMATIONS:  ", req.body);
        await db.query(
            "INSERT INTO messages (name, email, phone, message) VALUES ($1, $2, $3, $4)",
             [name, email,phone, message]);
             return res.status(201).json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (err) {
       res.status(500).json({
              error: err.message,
            });
    }
}

exports.getmessages = async (req, res) => {
    try {
        const {rows} = await db.query("SELECT * FROM messages");
        return res.json({
            success: true,
            messages: rows,
        })
    } catch (err) {
        res.status(500).json({
            error: err.message,
          });
    }
}