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
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.eat = function () {
        return "We are eating some ".concat(this.factoryMethod().someProduct());
    };
    return Factory;
}());
var Product1 = /** @class */ (function () {
    function Product1(name) {
        this.eatName = name;
    }
    Product1.prototype.someProduct = function () {
        return this.eatName;
    };
    return Product1;
}());
var Product2 = /** @class */ (function () {
    function Product2(name) {
        this.eatName = name;
    }
    Product2.prototype.someProduct = function () {
        return this.eatName;
    };
    return Product2;
}());
var Factory1 = /** @class */ (function (_super) {
    __extends(Factory1, _super);
    function Factory1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Factory1.prototype.factoryMethod = function () {
        return new Product1("Banana");
    };
    return Factory1;
}(Factory));
var Factory2 = /** @class */ (function (_super) {
    __extends(Factory2, _super);
    function Factory2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Factory2.prototype.factoryMethod = function () {
        return new Product2("PineApple");
    };
    return Factory2;
}(Factory));
var eating1 = new Factory1();
var eating2 = new Factory2();
console.log(eating1.factoryMethod());
console.log(eating1.eat());
console.log(eating2.factoryMethod());
console.log(eating2.eat());
