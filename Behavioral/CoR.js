var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CoR = /** @class */ (function () {
    function CoR() {
    }
    CoR.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    CoR.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return CoR;
}());
var Card1 = /** @class */ (function (_super) {
    __extends(Card1, _super);
    function Card1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card1.prototype.handle = function (request) {
        if (request < 200) {
            return "You pay ".concat(request, ". Card1 ");
        }
        return _super.prototype.handle.call(this, request);
    };
    return Card1;
}(CoR));
var Card2 = /** @class */ (function (_super) {
    __extends(Card2, _super);
    function Card2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card2.prototype.handle = function (request) {
        if (request < 500) {
            return "You pay ".concat(request, ". Card2 ");
        }
        return _super.prototype.handle.call(this, request);
    };
    return Card2;
}(CoR));
var Card3 = /** @class */ (function (_super) {
    __extends(Card3, _super);
    function Card3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card3.prototype.handle = function (request) {
        if (request < 700) {
            return "You pay ".concat(request, ". Card3 ");
        }
        return _super.prototype.handle.call(this, request);
    };
    return Card3;
}(CoR));
var card1 = new Card1();
var card2 = new Card2();
var card3 = new Card3();
var func = function (req, num) {
    var card = req.handle(num);
    if (card) {
        console.log(card);
    }
    else {
        console.log("No money");
    }
};
card1.setNext(card2).setNext(card3);
func(card1, 350);
func(card3, 100);
func(card1, 600);
func(card1, 850);
