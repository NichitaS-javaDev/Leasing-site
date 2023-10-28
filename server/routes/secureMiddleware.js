// const secureMiddleware = (req, res, next) => {
//     if (req.session.user) {
//         next();
//     } else {
//         res.status(401).json({ message: 'Unauthorized' });
//     }
// };
// const express = require("express");
// const router = express.Router();
//
// const checkAuthorization = (req, res, next) => {
//     if (req.session.user) {
//         next();
//     } else {
//         res.status(401).json({ message: 'Unauthorized' });
//     }
// };

// router.delete('/', checkAuthorization, (req, res) => {
//     res.send()
// });

// module.exports = router;