const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");

async function signup(req, res) {
    try {
        const { username, pwd } = req.body;

        if (!username || !pwd) {
            return res.status(400).json({ error: "missing data" });
        }

        const existing = await User.findOne({ username });
        if (existing) {
            return res.status(400).json({ error: "username is taken. please choose different username" });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(pwd, salt);

        const newUser = new User({ username, password: hash });
        await newUser.save();

        res.status(200).json({ success: true, message: "User signed up!" });
    } catch (e) {
        res.status(500).json({ error: "Server error while signing up" });
    }
}

async function login(req, res) {
    try {
        const { username, pwd } = req.body;

        if (!username || !pwd) {
            return res.status(400).json({ error: "missing data" });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "invalid data" });
        }

        const isMatch = await bcrypt.compare(pwd, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "invalid data" });
        }

        const token = generateToken(user);
        res.status(200).json({ success: true, token });
    } catch (e) {
        res.status(500).json({ error: "Server error while logging in" });
    }
}

module.exports = {
    signup,
    login,
};
