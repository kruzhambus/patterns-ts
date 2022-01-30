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
var Equipment = /** @class */ (function () {
    function Equipment() {
    }
    Equipment.prototype.getPrice = function () {
        return this.price;
    };
    Equipment.prototype.getName = function () {
        return this.name;
    };
    Equipment.prototype.setName = function (name) {
        this.name = name;
    };
    Equipment.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Equipment;
}());
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body(name, price) {
        var _this = _super.call(this) || this;
        _this.setName(name);
        _this.setPrice(price);
        return _this;
    }
    return Body;
}(Equipment));
var Tools = /** @class */ (function (_super) {
    __extends(Tools, _super);
    function Tools(name, price) {
        var _this = _super.call(this) || this;
        _this.setName(name);
        _this.setPrice(price);
        return _this;
    }
    return Tools;
}(Equipment));
var Sum = /** @class */ (function (_super) {
    __extends(Sum, _super);
    function Sum() {
        var _this = _super.call(this) || this;
        _this.equipments = [];
        return _this;
    }
    Sum.prototype.add = function (equipment) {
        this.equipments.push(equipment);
    };
    Sum.prototype.getPrice = function () {
        return this.equipments.map(function (item) { return item.getPrice(); }).reduce(function (a, b) { return a + b; });
    };
    return Sum;
}(Equipment));
var NewCar = /** @class */ (function (_super) {
    __extends(NewCar, _super);
    function NewCar() {
        var _this = _super.call(this) || this;
        _this.setName('MarkCar');
        return _this;
    }
    return NewCar;
}(Sum));
var car = new NewCar();
car.add(new Body("Body", 2000));
car.add(new Tools("Tools", 5000));
car.add(new Body("OtherBody", 1999));
console.log("".concat(car.getName(), " price ").concat(car.getPrice(), "$"));
