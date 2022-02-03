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
var Pudge = /** @class */ (function () {
    function Pudge() {
    }
    Pudge.prototype.ask = function () {
        console.log("Pudge \u0442\u0435\u0431\u044F \u043F\u0440\u0438\u0433\u043E\u043B\u0443\u0431\u0438\u0442!");
    };
    Pudge.prototype.accept = function (visitor) {
        visitor.visitPudge(this);
    };
    return Pudge;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.ask = function () {
        console.log("\u0418\u0441\u0442\u0438\u043D\u043D\u043E\u0435 \u0432\u043E\u043B\u0448\u0435\u0431\u0441\u0442\u0432\u043E \u0442\u043E\u0440\u0436\u0435\u0441\u0442\u0432\u0443\u0435\u0442.");
    };
    Invoker.prototype.accept = function (visitor) {
        visitor.visitInvoker(this);
    };
    return Invoker;
}());
var Visitor = /** @class */ (function () {
    function Visitor() {
    }
    Visitor.prototype.visitPudge = function (pudge) {
        console.log("This is Pudge visitor");
    };
    Visitor.prototype.visitInvoker = function (invoker) {
        console.log("This is Invoker visitor");
    };
    return Visitor;
}());
var askVisitor = /** @class */ (function (_super) {
    __extends(askVisitor, _super);
    function askVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    askVisitor.prototype.visitPudge = function (pudge) {
        pudge.ask();
    };
    askVisitor.prototype.visitInvoker = function (invoker) {
        invoker.ask();
    };
    return askVisitor;
}(Visitor));
var attackVisitor = /** @class */ (function (_super) {
    __extends(attackVisitor, _super);
    function attackVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    attackVisitor.prototype.visitPudge = function (pudge) {
        console.log("Pudge hooks hero!");
    };
    attackVisitor.prototype.visitInvoker = function (invoker) {
        console.log("Invoker cast sinestrike!");
    };
    return attackVisitor;
}(Visitor));
var invoker = new Invoker();
var pudge = new Pudge();
var ask = new askVisitor();
var attack = new attackVisitor();
invoker.accept(ask);
invoker.accept(attack);
console.log("");
pudge.accept(ask);
pudge.accept(attack);
