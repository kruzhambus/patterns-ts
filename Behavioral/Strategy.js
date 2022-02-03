var Pay = /** @class */ (function () {
    function Pay(strategy, sum) {
        this.strategy = strategy;
        this.sum = sum;
    }
    Pay.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Pay.prototype.youPay = function () {
        console.log("You need pay ~ ".concat(this.sum, "!"));
        var res = this.strategy.discount(this.sum);
        console.log("After use discont you need pay", res);
    };
    return Pay;
}());
var GoldDiscount = /** @class */ (function () {
    function GoldDiscount() {
    }
    GoldDiscount.prototype.discount = function (amount) {
        console.log("You discount 70%");
        return amount - (amount * 0.70);
    };
    return GoldDiscount;
}());
var PremiumDiscount = /** @class */ (function () {
    function PremiumDiscount() {
    }
    PremiumDiscount.prototype.discount = function (amount) {
        console.log("You discount 90%");
        return amount - amount * 0.90;
    };
    return PremiumDiscount;
}());
var gold = new GoldDiscount();
var premium = new PremiumDiscount();
var payPal = new Pay(gold, 500);
console.log("");
payPal.youPay();
console.log("");
payPal.setStrategy(premium);
payPal.youPay();
console.log("");
