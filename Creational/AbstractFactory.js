var CarOne = /** @class */ (function () {
    function CarOne() {
    }
    CarOne.prototype.carOneCreate = function () {
        return 'Good job! You create car One...';
    };
    return CarOne;
}());
var CarTwo = /** @class */ (function () {
    function CarTwo() {
    }
    CarTwo.prototype.carTwoCreate = function () {
        return 'Good job! You create car Two...';
    };
    return CarTwo;
}());
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory() {
    }
    AbstractFactory.prototype.carsOneFactory = function () {
        return new CarOne();
    };
    AbstractFactory.prototype.carsTwoFactory = function () {
        return new CarTwo();
    };
    return AbstractFactory;
}());
function user(factory) {
    var one = factory.carsOneFactory();
    var two = factory.carsTwoFactory();
    console.log(one.carOneCreate());
    console.log(two.carTwoCreate());
}
user(new AbstractFactory());
