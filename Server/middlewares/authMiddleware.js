const { verifyToken } = require("../utils/jwt");

function auth(req, res, next) {
    try {
        const header = req.headers["authorization"];
        const token = header?.split(" ")[1];

        if (!token) return res.status(401).json({ error: "Authorization error " });

        const decoded = verifyToken(token);
        req.user = decoded;

        next();
    } catch (e) {
        return res.status(401).json({ error: "Authorization errror" });
    }
}

module.exports = auth;
