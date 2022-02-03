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
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
var Runing = /** @class */ (function () {
    function Runing(state) {
        this.translate(state);
    }
    Runing.prototype.translate = function (state) {
        this.state = state;
        this.state.setContext(this);
    };
    Runing.prototype.request1 = function () {
        this.state.request();
    };
    return Runing;
}());
var Started = /** @class */ (function (_super) {
    __extends(Started, _super);
    function Started() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Started.prototype.request = function () {
        console.log("I a'm started");
        this.context.translate(new Finished());
    };
    return Started;
}(State));
var Finished = /** @class */ (function (_super) {
    __extends(Finished, _super);
    function Finished() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Finished.prototype.request = function () {
        console.log("I a'm fineshed");
        this.context.translate(new Started());
    };
    return Finished;
}(State));
var run = new Runing(new Started());
run.request1();
run.request1();
