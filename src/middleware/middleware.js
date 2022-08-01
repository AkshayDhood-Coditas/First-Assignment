// Middleware

module.exports = (req, res, next) => {
    if (req.method == "POST" && !Object.keys(req.body).length) return res.json("Empty Body! :(");
    next();
};