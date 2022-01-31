var CarOne = /** @class */ (function () {
    function CarOne() {
    }
    CarOne.prototype.carOneCreate = function () {
        return 'CarOne (its return of the CarOne)';
    };
    return CarOne;
}());
var CarTwo = /** @class */ (function () {
    function CarTwo() {
    }
    CarTwo.prototype.carTwoCreate = function () {
        return 'Good job! You create car Two...';
    };
    CarTwo.prototype.collaborateWithCarsOne = function (collab) {
        return "collaborating with ".concat(collab.carOneCreate());
    };
    return CarTwo;
}());
var CarOne2 = /** @class */ (function () {
    function CarOne2() {
    }
    CarOne2.prototype.carOneCreate = function () {
        return 'CarOne2 (its return of the CarOne2)';
    };
    return CarOne2;
}());
var CarTwo2 = /** @class */ (function () {
    function CarTwo2() {
    }
    CarTwo2.prototype.carTwoCreate = function () {
        return 'Good job! You create car Two2...';
    };
    CarTwo2.prototype.collaborateWithCarsOne = function (collab) {
        return "collaborating with ".concat(collab.carOneCreate());
    };
    return CarTwo2;
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
var AbstractFactory2 = /** @class */ (function () {
    function AbstractFactory2() {
    }
    AbstractFactory2.prototype.carsOneFactory = function () {
        return new CarOne2();
    };
    AbstractFactory2.prototype.carsTwoFactory = function () {
        return new CarTwo2();
    };
    return AbstractFactory2;
}());
function user(factory) {
    var one = factory.carsOneFactory();
    var two = factory.carsTwoFactory();
    console.log(two.carTwoCreate());
    console.log(two.collaborateWithCarsOne(one));
}
user(new AbstractFactory());
user(new AbstractFactory2());
