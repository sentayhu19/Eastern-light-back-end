exports.addmessage = async (req, res) => {
    try {
        const {name, email,phone, message} = req.body;
        const newMessage = await db.query("INSERT INTO messages (name, email,phone, message) VALUES ($1, $2, $3) RETURNING *", [name, email,phone, message]);
        res.json(newMessage.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}

exports.getmessages = async (req, res) => {
    try {
        const allMessages = await db.query("SELECT * FROM messages");
        res.json(allMessages.rows);
    } catch (err) {
        console.error(err.message);
    }
}