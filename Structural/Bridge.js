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
var HeroInfo = /** @class */ (function () {
    function HeroInfo(intelligence, strange, skill) {
        this.intelligence = intelligence;
        this.strange = strange;
        this.skill = skill;
    }
    HeroInfo.prototype.getInfo = function () {
        return "Intelligence: ".concat(this.intelligence, "*, Strange ").concat(this.strange, "*, Skill ").concat(this.skill, "*");
    };
    return HeroInfo;
}());
var InvokerInfo = /** @class */ (function (_super) {
    __extends(InvokerInfo, _super);
    function InvokerInfo() {
        return _super.call(this, 99, 1000, 145) || this;
    }
    return InvokerInfo;
}(HeroInfo));
var PudgeInfo = /** @class */ (function (_super) {
    __extends(PudgeInfo, _super);
    function PudgeInfo() {
        return _super.call(this, 999, 9999, 999) || this;
    }
    return PudgeInfo;
}(HeroInfo));
var Invoker = /** @class */ (function () {
    function Invoker(info) {
        this.info = info;
    }
    Invoker.prototype.name = function () {
        return "Invoker";
    };
    Invoker.prototype.changeInfo = function () {
        return "Hero: ".concat(this.name(), ", Info: ").concat(this.info.getInfo());
    };
    return Invoker;
}());
console.log("");
var invokerWithPudgeStats = new Invoker(new PudgeInfo);
console.log(invokerWithPudgeStats.changeInfo());
console.log("");
var invokerWithInvokerStats = new Invoker(new InvokerInfo);
console.log(invokerWithInvokerStats.changeInfo());
console.log("");
