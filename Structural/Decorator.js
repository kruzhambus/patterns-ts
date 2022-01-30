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
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.logger = function () {
        return "Component is called";
    };
    return Component;
}());
var Decorator = /** @class */ (function () {
    function Decorator(Decorator) {
        this.decorator = Decorator;
    }
    Decorator.prototype.logger = function () {
        return this.decorator.logger();
    };
    return Decorator;
}());
var OtherDecorator = /** @class */ (function (_super) {
    __extends(OtherDecorator, _super);
    function OtherDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OtherDecorator.prototype.logger = function () {
        return "OtherDecorator: ".concat(_super.prototype.logger.call(this));
    };
    return OtherDecorator;
}(Decorator));
var some = new Component();
console.log(some.logger());
console.log("");
var dec = new Decorator(some);
var otherDec = new OtherDecorator(dec);
console.log(otherDec.logger());
