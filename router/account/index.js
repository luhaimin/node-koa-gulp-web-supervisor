let Account = require("../../controllers/account/account");
let Wish = require("../../controllers/account/wish");
let Cart = require("../../controllers/account/cart");



module.exports = {
    account:Account.index,
    wish: Wish.index,
    cart:Cart.index
}