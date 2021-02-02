const users = require('../models/users');

//Welcome page
const index = (req, res) => {
    res.render('users/index.ejs')
};    

module.exports = {
    index,        
};