var Invoker1 = /** @class */ (function () {
    function Invoker1() {
    }
    Invoker1.prototype.loggerForInvoker = function () {
        return "Истинное волшебство торжествует.";
    };
    return Invoker1;
}());
var Pudge1 = /** @class */ (function () {
    function Pudge1() {
    }
    Pudge1.prototype.loggerForPudge = function () {
        return "Pudge тебя приголубит!";
    };
    return Pudge1;
}());
var AdapterHero = /** @class */ (function () {
    function AdapterHero(say) {
        this.say = say;
    }
    AdapterHero.prototype.loggerForInvoker = function () {
        return this.say.loggerForPudge();
    };
    return AdapterHero;
}());
var AdapterHero2 = /** @class */ (function () {
    function AdapterHero2(say) {
        this.say = say;
    }
    AdapterHero2.prototype.loggerForPudge = function () {
        return this.say.loggerForInvoker();
    };
    return AdapterHero2;
}());
console.log("");
var hero1 = new Invoker1();
var hero2 = new AdapterHero(new Pudge1());
console.log(hero1.loggerForInvoker());
console.log(hero2.loggerForInvoker());
console.log("");
var hero3 = new Pudge1();
var hero4 = new AdapterHero2(new Invoker1());
console.log(hero3.loggerForPudge());
console.log(hero4.loggerForPudge());
console.log("");
