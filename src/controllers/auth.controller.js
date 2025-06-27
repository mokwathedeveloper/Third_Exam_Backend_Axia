
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    // In a real application, you would validate the user's credentials against a database
    const user = { id: 1, username: 'testuser' };

    const accessToken = jwt.sign(user, 'your_secret_key', { expiresIn: '1h' });

    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.status(200).json({ message: 'Login successful' });
};

const logout = (req, res) => {
    res.clearCookie('accessToken');
    res.status(200).json({ message: 'Logout successful' });
};

module.exports = {
    login,
    logout
};