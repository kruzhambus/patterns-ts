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
var ClickGame = /** @class */ (function () {
    function ClickGame() {
        this.click = 0;
    }
    ClickGame.prototype.templateMethod = function () {
        this.clickMethod();
        this.howManyClick();
        this.resetGame();
    };
    ClickGame.prototype.howManyClick = function () {
        console.log("You have", this.click, "points");
    };
    ClickGame.prototype.clickMethod = function () {
        console.log("You click");
        this.click = this.click + 1;
    };
    ClickGame.prototype.resetGame = function () {
        this.click = 0;
    };
    return ClickGame;
}());
var ClickGameWon = /** @class */ (function (_super) {
    __extends(ClickGameWon, _super);
    function ClickGameWon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClickGameWon.prototype.resetGame = function () {
        console.log("Good job! You won this game.");
        this.click = 0;
    };
    return ClickGameWon;
}(ClickGame));
var ClickGameBonus = /** @class */ (function (_super) {
    __extends(ClickGameBonus, _super);
    function ClickGameBonus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClickGameBonus.prototype.clickMethod = function () {
        console.log("You click! +50 points");
        this.click = this.click + 50;
    };
    ClickGameBonus.prototype.resetGame = function () {
        console.log("You won this game.");
        this.click = 0;
    };
    return ClickGameBonus;
}(ClickGame));
var user1 = new ClickGameWon();
var user2 = new ClickGameBonus();
user1.templateMethod();
console.log("");
user2.templateMethod();
