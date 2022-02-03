var Mediator = /** @class */ (function () {
    function Mediator() {
        this.user1 = new User1();
        this.user2 = new User2();
    }
    Mediator.prototype.user1Method = function () {
        this.user1.method1();
    };
    Mediator.prototype.user2Method = function () {
        this.user2.method2();
    };
    return Mediator;
}());
var User1 = /** @class */ (function () {
    function User1() {
    }
    User1.prototype.method1 = function () {
        console.log('Its method1 from User1');
    };
    return User1;
}());
var User2 = /** @class */ (function () {
    function User2() {
    }
    User2.prototype.method2 = function () {
        console.log('Its method2 from User2');
    };
    return User2;
}());
var mediator = new Mediator();
mediator.user1Method();
mediator.user2Method();
